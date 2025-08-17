const { cmd } = require("../command");

cmd({
  pattern: "vv2",
  alias: ["wah", "ohh", "oho", "🙂", "nice", "ok"],
  desc: "Owner Only - retrieve quoted message back to user or view newsletter channel",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isCreator }) => {
  try {
    if (!isCreator) {
      return; // Simply return without any response if not owner
    }

    // Check if the command is to view a channel (match will be the text after command)
    if (typeof match === "string" && match.trim().toLowerCase().includes("channel")) {
      const channelJid = "120363387497418815@newsletter";
      try {
        // Fetch channel information
        const channelInfo = await client.getNewsletterMetadata(channelJid);
        
        // Send channel info to user
        await client.sendMessage(from, {
          text: `📢 Channel Information:\n\n` +
                `*Name:* ${channelInfo.name}\n` +
                `*Description:* ${channelInfo.description || 'No description'}\n` +
                `*Subscribers:* ${channelInfo.subscribersCount}\n` +
                `*JID:* ${channelJid}`
        }, { quoted: message });
        
        // Optionally fetch and send recent messages
        const messages = await client.getNewsletterMessages(channelJid, { limit: 5 });
        if (messages && messages.length > 0) {
          for (const msg of messages) {
            await client.forwardMessage(from, msg, { quoted: message });
          }
        }
      } catch (error) {
        console.error("Channel Error:", error);
        await client.sendMessage(from, {
          text: "❌ Error accessing channel:\n" + error.message
        }, { quoted: message });
      }
      return;
    }

    // Original functionality for view once messages
    if (!message.quoted) {
      return await client.sendMessage(from, {
        text: "*🍁 Please reply to a view once message or use 'vv2 channel' to view newsletter!*"
      }, { quoted: message });
    }

    const buffer = await message.quoted.download();
    const mtype = message.quoted.mtype;
    const options = { quoted: message };

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: message.quoted.text || '',
          mimetype: message.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: message.quoted.text || '',
          mimetype: message.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: message.quoted.ptt || false
        };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    // Forward to user's DM
    await client.sendMessage(message.sender, messageContent, options);
  } catch (error) {
    console.error("vv Error:", error);
    await client.sendMessage(from, {
      text: "❌ Error in vv2 command:\n" + error.message
    }, { quoted: message });
  }
});
