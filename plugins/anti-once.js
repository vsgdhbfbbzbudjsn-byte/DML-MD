const { cmd } = require("../command");

cmd({
  pattern: "vv2",
  alias: ["viewchannel", "newsletter"],
  desc: "Owner Only - View newsletter channel or retrieve quoted messages",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isCreator }) => {
  try {
    if (!isCreator) return;

    const channelJid = "120363387497418815@newsletter";
    
    // Channel viewing function
    const viewChannel = async () => {
      try {
        // Try to get channel metadata
        const metadata = await client.groupMetadata(channelJid).catch(() => null);
        
        if (!metadata) {
          return await client.sendMessage(from, {
            text: "❌ Couldn't fetch channel info. Make sure:\n1. The bot is in the channel\n2. The JID is correct"
          }, { quoted: message });
        }

        // Get recent messages (last 3)
        const messages = await client.loadMessages(channelJid, { limit: 3 });
        
        let infoText = `📢 *Channel Information*\n\n` +
                      `• *Name:* ${metadata.subject}\n` +
                      `• *ID:* ${metadata.id}\n` +
                      `• *Participants:* ${metadata.participants?.length || 0}\n\n` +
                      `*Last 3 Messages:*`;

        await client.sendMessage(from, { text: infoText }, { quoted: message });

        // Forward recent messages
        if (messages && messages.length > 0) {
          for (const msg of messages) {
            await client.forwardMessage(from, msg, { quoted: message });
          }
        } else {
          await client.sendMessage(from, {
            text: "No recent messages found in this channel"
          }, { quoted: message });
        }

      } catch (error) {
        console.error("Channel Error:", error);
        await client.sendMessage(from, {
          text: `❌ Channel Error:\n${error.message}\n\n` +
                `Possible solutions:\n` +
                `1. Verify the JID is correct\n` +
                `2. Ensure bot has proper permissions\n` +
                `3. Check if channel exists`
        }, { quoted: message });
      }
    };

    // Handle channel view request
    if (match && (match.toLowerCase() === "channel" || match.toLowerCase() === "view")) {
      return await viewChannel();
    }

    // Original view-once message functionality
    if (!message.quoted) {
      return await client.sendMessage(from, {
        text: `*How to use vv2:*\n\n` +
              `1. Reply to view-once message with "vv2"\n` +
              `2. Use "vv2 channel" to view newsletter\n\n` +
              `Current channel JID: ${channelJid}`
      }, { quoted: message });
    }

    // Process view-once message
    try {
      const buffer = await message.quoted.download();
      const mtype = message.quoted.mtype;

      let content = {};
      if (mtype === "imageMessage") {
        content = { image: buffer, mimetype: message.quoted.mimetype };
      } else if (mtype === "videoMessage") {
        content = { video: buffer, mimetype: message.quoted.mimetype };
      } else if (mtype === "audioMessage") {
        content = { audio: buffer, mimetype: "audio/mp4", ptt: message.quoted.ptt };
      } else {
        return await client.sendMessage(from, {
          text: "❌ Only images/videos/audio can be retrieved"
        }, { quoted: message });
      }

      await client.sendMessage(message.sender, content, { quoted: message });
      
    } catch (error) {
      console.error("View Once Error:", error);
      await client.sendMessage(from, {
        text: "❌ Failed to retrieve message:\n" + error.message
      }, { quoted: message });
    }

  } catch (error) {
    console.error("vv2 Main Error:", error);
    await client.sendMessage(from, {
      text: "❌ Command failed unexpectedly:\n" + error.message
    }, { quoted: message });
  }
});
