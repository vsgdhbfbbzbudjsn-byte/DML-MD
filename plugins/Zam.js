const config = require('../config');
const { cmd } = require('../command');
const FormData = require('form-data');
const fetch = require('node-fetch'); // Node.js fetch

cmd({
    pattern: "shazam",
    alias: ["findsong", "whatmusic"],
    react: "🎵",
    desc: "Identify a song by replying with audio",
    category: "tools",
    use: ".shazam (reply with audio)",
    filename: __filename
}, async (conn, m, mek, { from, reply }) => {
    try {
        if (!m.quoted) return await reply("🎵 Please reply to an *audio/voice note* to identify the song.");

        const type = m.quoted.mtype || "";
        if (type !== "audioMessage") return await reply("❌ Please reply to a valid *audio message*.");

        // Download audio
        const buffer = await m.quoted.download?.();
        if (!buffer) return await reply("❌ Failed to download audio, try again.");

        await reply("⏳ Identifying song... Please wait!");

        // Prepare form data
        const formData = new FormData();
        formData.append("file", buffer, { filename: "song.mp3", contentType: "audio/mpeg" });
        formData.append("api_token", "https://api.audd.io/setCallbackUrl/"); // Replace with your API key

        // Call Audd.io API
        const response = await fetch("https://api.audd.io/", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (!result || !result.result) return await reply("❌ Sorry, could not identify this song.");

        const song = result.result;
        const teks = `🎶 *Shazam Result* 🎶

▢ *Title* : ${song.title || "Unknown"}
▢ *Artist* : ${song.artist || "Unknown"}
▢ *Album* : ${song.album || "Unknown"}
▢ *Release Date* : ${song.release_date || "Unknown"}
▢ *Link* : ${song.song_link || "N/A"}`;

        await conn.sendMessage(from, { text: teks }, { quoted: mek });

    } catch (error) {
        console.error("Shazam Command Error:", error);
        await reply(`❌ Error: ${error.message}`);
    }
});
