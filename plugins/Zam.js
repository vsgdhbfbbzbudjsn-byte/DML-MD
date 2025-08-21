// Useme hii command yako 
const config = require('../config')
const { cmd, commands } = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "shazam",
    react: "🎵",
    alias: ["findsong", "musicid"],
    desc: "Identify song by audio",
    category: "tools",
    use: ".shazam (reply to audio/video)",
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        // Lazima mtu areply audio au video
        if (!m.quoted) return reply("❌ Please reply to an *audio* or *video* file to identify the song.");
        
        let mime = (m.quoted.msg || m.quoted).mimetype || "";
        if (!/audio|video/.test(mime)) return reply("❌ Please reply only to an audio or video file.");

        // Download the audio/video buffer
        let media = await m.quoted.download?.();
        if (!media) return reply("❌ Failed to download the file, try again.");

        // Upload audio/video to some hosting (if needed for API)
        // Example: use an API that accepts base64 or buffer
        // Hapa tunatumia API ya shazam unofficial (hosted)
        let { data } = await fetchJson(`https://api.zahwazein.xyz/search/shazam?apikey=zenzkey`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ audio: media.toString("base64") })
        });

        if (!data || !data.title) return reply("❌ Could not recognize the song.");

        let teks = `🎶 *Shazam Result*\n\n`;
        teks += `▢ *Title:* ${data.title}\n`;
        teks += `▢ *Artist:* ${data.artist}\n`;
        teks += `▢ *Album:* ${data.album || "-"}\n`;
        teks += `▢ *Genre:* ${data.genre || "-"}\n`;
        teks += `▢ *Released:* ${data.release_date || "-"}\n`;
        if (data.url) teks += `\n🔗 *Listen:* ${data.url}`;

        await conn.sendMessage(from, { text: teks }, { quoted: mek });

    } catch (e) {
        console.error("Shazam Error:", e);
        reply(`❌ *Error Occurred while Shazaming !!*\n\n${e.message || e}`);
    }
});
