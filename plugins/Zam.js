const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

// Fixed & Created By DML
cmd({
    pattern: "shazam",
    alias: ["findsong", "whatmusic"],
    react: "🎵",
    desc: "Identify a song by replying with audio",
    category: "tools",
    use: '.shazam (reply with audio)',
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        if (!m.quoted) return reply("🎵 Please reply to an *audio/voice note* to identify the song.");

        let type = m.quoted.mtype || "";
        if (type !== "audioMessage") {
            return reply("❌ Please reply to a valid *audio message*.");
        }

        // Download the audio buffer
        const buffer = await m.quoted.download?.();
        if (!buffer) return reply("❌ Failed to download audio, try again.");

        reply("⏳ Identifying song... Please wait!");

        // Upload audio buffer to an online API that supports Shazam recognition
        // Example: using shazam API from some free service
        // NB: You need an API key or service that supports audio recognition
        let formData = new FormData();
        formData.append("file", buffer, "song.mp3");

        let result = await fetchJson("https://api.audd.io/", {
            method: "POST",
            body: formData
        });

        if (!result || !result.result) {
            return reply("❌ Sorry, could not identify this song.");
        }

        let song = result.result;
        let teks = `🎶 *Shazam Result* 🎶

▢ *Title* : ${song.title || "Unknown"}
▢ *Artist* : ${song.artist || "Unknown"}
▢ *Album* : ${song.album || "Unknown"}
▢ *Release Date* : ${song.release_date || "Unknown"}
▢ *Link* : ${song.song_link || "N/A"}`;

        await conn.sendMessage(from, { text: teks }, { quoted: mek });

    } catch (e) {
        console.error("Shazam Error:", e);
        reply(`❌ *Error Occurred !!*\n\n${e.message}`);
    }
});
