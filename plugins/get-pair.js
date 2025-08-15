const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Get pairing code for DML-MD bot",
    category: "download",
    use: ".pair 255785591289",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, args, q, senderNumber, reply }) => {
    try {
        const phoneNumber = q ? q.trim().replace(/[^0-9]/g, '') : senderNumber.replace(/[^0-9]/g, '');

        if (!phoneNumber || phoneNumber.length < 10 || phoneNumber.length > 15) {
            return await reply("❌ Please provide a valid phone number without `+`\nExample: `.pair 255785591289`");
        }

        const res = await axios.get(`https://dml-server.onrender.com/code?number=${encodeURIComponent(phoneNumber)}`);
        if (!res.data || !res.data.code) {
            return await reply("❌ Failed to retrieve pairing code. Please try again later.");
        }

        const pairingCode = res.data.code;

        const codeMessage = `╔ ✅ DML-MD | PAIRING SUCCESSFUL ═╗
║
║   📱 *Number:* ${phoneNumber}
║   🔗 *Pairing Code:* ${pairingCode}
║
╚═🚀═〔 Powered by DML 〕═🚀═╝
`.trim();

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/1jhspj.jpg` },
            caption: codeMessage,
            footer: 'Tap below to get dml-md code again for copying:',
            templateButtons: [
                {
                    index: 1,
                    quickReplyButton: {
                        displayText: "✅ Copy Code",
                        id: `.copy ${pairingCode}`
                    }
                }
            ],
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363387497418815@newsletter',
                    newsletterName: 'DML-MD UPDATES',
                    serverMessageId: 119
                },
                externalAdReply: {
                    title: "AUTO PARING",
                    body: "Auto pairing code system",
                    thumbnailUrl: `https://files.catbox.moe/1jhspj.jpg`,
                    sourceUrl: "https://github.com/MLILA17/DML-MD"
                }
            }
        }, {
            quoted: {
                key: {
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast"
                },
                message: {
                    contactMessage: {
                        displayName: "DML-MD VERIFIED",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:BOT;DML-MD;;;\nFN:DML-MD\nitem1.TEL;waid=255700000000:+255 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                    }
                }
            }
        });

    } catch (error) {
        console.error("❌ Pair command error:", error);
        await reply("❌ Error retrieving pairing code. Try again later.");
    }
});
                    
