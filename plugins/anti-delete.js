const { cmd } = require('../command');
const { getAnti, setAnti } = require('../data/antidel');

cmd({
    pattern: "antidelete",
    alias: ['antidel', 'del'],
    desc: "Toggle anti-delete feature",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { from, reply, text, isCreator }) => {
    if (!isCreator) return reply('This command is only for the bot owner');
    
    try {
        const currentStatus = await getAnti();
        
        if (!text || text.toLowerCase() === 'status') {
            return reply(`*AntiDelete Status:* ${currentStatus ? '✅ ON' : '❌ OFF'}\n\nUsage:\n• .antidelete on - Enable\n• .antidelete off - Disable`);
        }
        
        const action = text.toLowerCase().trim();
        
        if (action === 'on') {
            await setAnti(true);
            return reply('✅ Anti-delete has been enabled');
        } 
        else if (action === 'off') {
            await setAnti(false);
            return reply('❌ Anti-delete has been disabled');
        } 
        else {
            return reply('Invalid command. Usage:\n• .antidelete on\n• .antidelete off\n• .antidelete status');
        }
         await zk.sendMessage(m.chat, {
      text: message.trim(),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363387497418815@newsletter",
          newsletterName: "🇹🇿DML-MD",
          serverMessageId: 1
        }
      }
    } catch (e) {
        console.error("Error in antidelete command:", e);
        return reply("An error occurred while processing your request.");
    }
});
