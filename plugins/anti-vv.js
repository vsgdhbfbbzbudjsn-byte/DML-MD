const { cmd } = require("../command");

// Contact for verified quoting
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "DML VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:DML VERIFIED ✅\nORG:DML-TECH BOT;\nTEL;type=CELL;type=VOICE;waid=255713541112:+255622220680\nEND:VCARD"
    }
  }
};

cmd({
  pattern: "vv",
  alias: ["viewonce", "retrive"],
  react: '😁',
  desc: "Owner Only - retrieve quoted view once message",
  category: "owner",
  filename: __filename
}, async (conn, mek, m, { from, isCreator }) => {
  try {
    if (!isCreator) {
      return await conn.sendMessage(from, {
        text: "*📛 This is an owner-only command.*",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363387497418815@newsletter",
            newsletterName: "DML-VV",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    if (!m.quoted) {
      return await conn.sendMessage(from, {
        text: "*🍁 Please reply to a view once message.*",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363387497418815@newsletter",
            newsletterName: "DML-VV",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    // Check if the quoted message is a viewOnce message
    if (!m.quoted.viewOnce) {
      return await conn.sendMessage(from, {
        text: "*❌ This is not a view once message.*",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363387497418815@newsletter",
            newsletterName: "DML-VV",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    const buffer = await m.quoted.download?.();
    const mtype = m.quoted.mtype;

    if (!buffer || !mtype) {
      return await conn.sendMessage(from, {
        text: "❌ Unable to download the message or unsupported type.",
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363387497418815@newsletter",
            newsletterName: "DML-VV",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

    let content = {};

    switch (mtype) {
      case "imageMessage":
        content = {
          image: buffer,
          caption: m.quoted.text || "📷 Dml Image restored"
        };
        break;
      case "videoMessage":
        content = {
          video: buffer,
          caption: m.quoted.text || "🎥 Dml Video restored"
        };
        break;
      case "audioMessage":
        content = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: m.quoted.ptt || false
        };
        break;
      default:
        return await conn.sendMessage(from, {
          text: "❌ Only image, video, and audio view once messages are supported.",
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363387497418815@newsletter",
              newsletterName: "DML-VV",
              serverMessageId: 13
            }
          }
        }, { quoted: quotedContact });
    }

    // Send to private chat instead of group
    const sender = m.quoted.sender || m.participant;
    if (sender) {
      // Send to the user's private chat
      await conn.sendMessage(sender.split('@')[0] + '@s.whatsapp.net', {
        ...content,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363387497418815@newsletter",
            newsletterName: "DML-VV",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
      
      // Notify in group that it was sent to inbox
      if (from.endsWith('@g.us')) {
        await conn.sendMessage(from, {
          text: `*📩 The view once message has been sent to @${sender.split('@')[0]}'s inbox.*`,
          mentions: [sender]
        });
      }
    } else {
      // Fallback to sending in current chat if sender can't be determined
      await conn.sendMessage(from, {
        ...content,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363387497418815@newsletter",
            newsletterName: "DML-VV",
            serverMessageId: 13
          }
        }
      }, { quoted: quotedContact });
    }

  } catch (error) {
    console.error("vv Error:", error);
    await conn.sendMessage(from, {
      text: `❌ Error occurred while retrieving view once:\n\n${error.message || error}`
    }, { quoted: quotedContact });
  }
});
