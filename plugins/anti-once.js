const { cmd } = require("../command");

cmd({
  pattern: "vv2",
  alias: ["viewchannel", "newsletter"],
  desc: "Owner Only - View newsletter channel or retrieve quoted message",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isCreator }) => {
  try {
    if (!isCreator) return;

    // Channel viewing option
    if (match === "channel") {
      const channelJid = "120363387497418815@newsletter";
      
      try {
        // 1. Get channel info
        const channelInfo = await client.getNewsletterMetadata(channelJid);
        
        await client.sendMessage(from, {
          text: `📢 *Channel Info*\n\n` +
                `• *Name:* ${channelInfo.name}\n` +
                `• *Description:* ${channelInfo.description || 'None'}\n` +
                `• *Subscribers:* ${channelInfo.subscribersCount}\n` +
                `• *JID:* ${channelJid}\n\n` +
                `Use 'vv2 recent' to get latest messages`
        }, { quoted: message });

      } catch (error) {
        console.error("Channel Error:", error);
        await client.sendMessage(from, {
          text: "❌ Failed to fetch channel info:\n" + error.message
        }, { quoted: message });
      }
      return;
    }

    // Get recent messages option
    if (match === "recent") {
      const channelJid = "120363387497418815@newsletter";
      
      try {
        const messages = await client.getNewsletterMessages(channelJid, { limit: 3 });
        
        if (!messages || messages.length === 0) {
          return await client.sendMessage(from, {
            text: "No recent messages found in the channel"
          }, { quoted: message });
        }

        await client.sendMessage(from, {
          text: `📢 Latest ${messages.length} channel messages:`
        }, { quoted: message });

        for (const msg of messages) {
          await client.forwardMessage(from, msg);
        }

      } catch (error) {
        console.error("Recent Messages Error:", error);
        await client.sendMessage(from, {
          text: "❌ Failed to fetch recent messages:\n" + error.message
        }, { quoted: message });
      }
      return;
    }

    // Original view-once message functionality
    if (!message.quoted) {
      return await client.sendMessage(from, {
        text: `*Usage Options:*\n\n` +
              `1. Reply to a view-once message with 'vv2'\n` +
              `2. Use 'vv2 channel' to view channel info\n` +
              `3. Use 'vv2 recent' to get latest messages`
      }, { quoted: message });
    }

    // Rest of the view-once message handling code...
    const buffer = await message.quoted.download();
    const mtype = message.quoted.mtype;

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = { image: buffer, mimetype: message.quoted.mimetype };
        break;
      case "videoMessage":
        messageContent = { video: buffer, mimetype: message.quoted.mimetype };
        break;
      case "audioMessage":
        messageContent = { audio: buffer, mimetype: "audio/mp4", ptt: message.quoted.ptt };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image/video/audio messages supported"
        }, { quoted: message });
    }

    await client.sendMessage(message.sender, messageContent, { quoted: message });

  } catch (error) {
    console.error("vv2 Error:", error);
    await client.sendMessage(from, {
      text: "❌ Command failed:\n" + error.message
    }, { quoted: message });
  }
});
