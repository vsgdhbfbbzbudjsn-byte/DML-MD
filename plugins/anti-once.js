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
    
    // Safely check match for channel command
    const isChannelCommand = typeof match === "string" && 
                           (match.toLowerCase().includes("channel") || 
                            match.toLowerCase().includes("view"));

    // Channel viewing function
    const viewChannel = async () => {
      try {
        // Try to get channel metadata
        const metadata = await client.groupMetadata(channelJid).catch(() => null);
        
        if (!metadata) {
          return await client.sendMessage(from, {
            text: "❌ Couldn't fetch channel info. Possible reasons:\n" +
                  "1. Bot isn't in the channel\n" +
                  "2. Invalid channel JID\n" +
                  "3. Channel doesn't exist\n\n" +
                  `Current JID: ${channelJid}`
          }, { quoted: message });
        }

        // Get recent messages (last 3)
        const messages = await client.loadMessages(channelJid, { limit: 3 });
        
        let infoText = `📢 *Channel Information*\n\n` +
                      `• *Name:* ${metadata.subject}\n` +
                      `• *ID:* ${metadata.id}\n` +
                      `• *Created:* ${metadata.creation ? new Date(metadata.creation * 1000).toLocaleString() : 'Unknown'}\n\n` +
                      `*Recent Messages:*`;

        await client.sendMessage(from, { text: infoText }, { quoted: message });

        // Forward recent messages if available
        if (messages?.length > 0) {
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
                `Technical Details:\n` +
                `• JID: ${channelJid}\n` +
                `• Error Type: ${error.name}`
        }, { quoted: message });
      }
    };

    // Handle channel view request
    if (isChannelCommand) {
      return await viewChannel();
    }

    // Original view-once message functionality
    if (!message.quoted) {
      return await client.sendMessage(from, {
        text: `*vv2 Command Help*\n\n` +
              `1. Reply to view-once message with "vv2"\n` +
              `2. View channel with "vv2 channel"\n\n` +
              `Current channel JID:\n${channelJid}`
      }, { quoted: message });
    }

    // Process view-once message
    try {
      const buffer = await message.quoted.download();
      const mtype = message.quoted.mtype;

      let content = {};
      switch (mtype) {
        case "imageMessage":
          content = { 
            image: buffer, 
            mimetype: message.quoted.mimetype || "image/jpeg",
            caption: message.quoted.caption || ""
          };
          break;
        case "videoMessage":
          content = { 
            video: buffer, 
            mimetype: message.quoted.mimetype || "video/mp4",
            caption: message.quoted.caption || ""
          };
          break;
        case "audioMessage":
          content = { 
            audio: buffer, 
            mimetype: message.quoted.mimetype || "audio/mp4",
            ptt: message.quoted.ptt || false
          };
          break;
        default:
          return await client.sendMessage(from, {
            text: "❌ Only images, videos and audio messages can be retrieved"
          }, { quoted: message });
      }

      await client.sendMessage(message.sender, content, { quoted: message });
      
    } catch (error) {
      console.error("View Once Error:", error);
      await client.sendMessage(from, {
        text: "❌ Failed to retrieve message:\n" + 
              `${error.message}\n\n` +
              `Try again or check if the message still exists`
      }, { quoted: message });
    }

  } catch (error) {
    console.error("vv2 Main Error:", error);
    await client.sendMessage(from, {
      text: "❌ Unexpected command failure:\n" +
            `${error.message}\n\n` +
            `Please report this error to the developer`
    }, { quoted: message });
  }
});
