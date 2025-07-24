const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["dml","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
╭━━〔 ✨ 𝐃𝐌𝐋-𝐌𝐃 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐏𝐀𝐍𝐄𝐋 ✨ 〕━━╮
┃
┃  👋 𝐇𝐞𝐥𝐥𝐨 𝐝𝐞𝐚𝐫 *${pushname}*  
┃  𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑫𝑴𝑳-𝑴𝑫 𝒘𝒐𝒓𝒍𝒅 🌍  
┃
╰━───────━───━───━───━──━╯

╭⭓ 𝐌𝐘 𝐏𝐑𝐎𝐅𝐈𝐋𝐄
┃ 👑 𝐍𝐚𝐦𝐞: 𝐃𝐚𝐮𝐝𝐢 𝐌𝐮𝐬𝐚 𝐌𝐥𝐢𝐥𝐚  
┃ 🧠 𝐁𝐨𝐭: 𝐃𝐌𝐋-𝐌𝐃  
┃ 🛠️ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫: 𝐌𝐋𝐈𝐋𝐀𝟏𝟕  
┃ 🏙️ 𝐂𝐢𝐭𝐲: 𝐃𝐚𝐫 𝐞𝐬 𝐒𝐚𝐥𝐚𝐚𝐦, 🇹🇿  
┃ 🌐 𝐏𝐮𝐛𝐥𝐢𝐜 𝐍𝐚𝐦𝐞: 𝐃𝐌𝐋  
┃ ⏳ 𝐀𝐠𝐞: ∞ 𝐘𝐞𝐚𝐫𝐬  
┃ 🧑‍💻 𝐒𝐢𝐦𝐩𝐥𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐃𝐞𝐯  
╰━━━━━━━━━━━━━━━━━━━━━⭓

╭⭓ 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐓𝐇𝐀𝐍𝐊𝐒 💐
┃ ✅ 𝐈𝐛𝐫𝐚𝐡𝐢𝐦𝐮 𝐀𝐝𝐚𝐦𝐬  
┃ ✅ 𝐓𝐢𝐦𝐧𝐚𝐬𝐚  
┃ ✅ 𝐂𝐡𝐚𝐫𝐬𝐞 𝐊𝐄  
┃ ✅ 𝐁𝐌𝐁  
┃ ✅ 𝐃𝐚𝐯𝐢𝐧𝐜𝐬  
┃ ✅ 𝐓𝐎  
╰━━━━━━━━━━━━━━━━━━━━━⭓

╭⭓ 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐋𝐈𝐍𝐊𝐒 🌐
┃ 📣 𝐂𝐡𝐚𝐧𝐧𝐞𝐥:  
┃ 🔗 https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C
┃ 👥 𝐆𝐫𝐨𝐮𝐩:  
┃ 🔗 https://chat.whatsapp.com/FunyTxSwaKI7E5Q4z8YGbS
┃ 💬 𝐂𝐨𝐧𝐭𝐚𝐜𝐭:  
┃ 🔗 wa.me/+255?text=Support!
╰━━━━━━━━━━━━━━━━━━━━━⭓

🚨 𝘿𝙈𝙇-𝙈𝘿 | *Simplicity Meets Power*
${readMore}
`;*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/tjt2z2.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363387497418815@newsletter',
      newsletterName: 'DML-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
