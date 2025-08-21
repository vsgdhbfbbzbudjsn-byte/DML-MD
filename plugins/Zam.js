const config = require('../config')
const { cmd } = require('../command')
const mm = require('music-metadata') // library ya kusoma metadata

cmd({
    pattern: "shazam",
    react: "🎵",
    alias: ["findsong", "musicid"],
    desc: "Identify song by reading metadata (offline)",
    category: "tools",
    use: ".shazam (reply to audio)",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        if (!m.quoted) return reply("❌ Please reply to an audio file.");
        
        let mime = (m.quoted.msg || m.quoted).mimetype || "";
        if (!/audio/.test(mime)) return reply("❌ Only works on audio files.");

        // Download the audio
        let media = await m.quoted.download?.();
        if (!media) return reply("❌ Failed to download audio.");

        // Soma metadata ya audio
        let metadata = await mm.parseBuffer(media, mime);
        let common = metadata.common;

        let teks = `🎶 *Song Metadata*\n\n`;
        teks += `▢ *Title:* ${common.title || "Unknown"}\n`;
        teks += `▢ *Artist:* ${common.artist || "Unknown"}\n`;
        teks += `▢ *Album:* ${common.album || "Unknown"}\n`;
        teks += `▢ *Genre:* ${common.genre ? common.genre.join(", ") : "Unknown"}\n`;
        teks += `▢ *Year:* ${common.year || "Unknown"}\n`;

        await conn.sendMessage(from, { text: teks }, { quoted: mek });

    } catch (e) {
        console.error("Shazam (offline) Error:", e);
        reply(`❌ *Error Occurred !!*\n\n${e.message || e}`);
    }
});
