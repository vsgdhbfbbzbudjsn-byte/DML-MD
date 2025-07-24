const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const path = require('path');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "menu3",
    desc: "menu the bot",
    category: "menu3",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭──〔 🏠 𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄 - ${config.BOT_NAME} 〕──╮
│ 👑 𝙾𝚠𝚗𝚎𝚛     : ${config.OWNER_NAME}
│ ⚙️ 𝙼𝚘𝚍𝚎      : ${config.MODE}
│ 🌍 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖  : Heroku
│ 🧠 𝚃𝚢𝚙𝚎      : NodeJs Multi Device
│ ⌨️ 𝙿𝚛𝚎𝚏𝚒𝚡    : ${config.PREFIX}
│ 📦 𝚅𝚎𝚛𝚜𝚒𝚘𝚗   : 3.0.0 Beta
╰────────────────────────────────────╯

╭──〔 📁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸𝙴𝚂 〕──╮
│ 📖 𝗤𝘂𝗿𝗮𝗻𝗺𝗲𝗻𝘂      🕋 𝗣𝗿𝗮𝘆𝗲𝗿𝘁𝗶𝗺𝗲
│ 🤖 𝗔𝗶𝗺𝗲𝗻𝘂         🎭 𝗔𝗻𝗶𝗺𝗲𝗺𝗲𝗻𝘂
│ 😹 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻𝘀      🔁 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗺𝗲𝗻𝘂
│ 🎉 𝗙𝘂𝗻𝗺𝗲𝗻𝘂         ⬇️ 𝗗𝗹𝗺𝗲𝗻𝘂
│ 🏠 𝗠𝗮𝗶𝗻𝗺𝗲𝗻𝘂       👥 𝗚𝗿𝗼𝘂𝗽𝗺𝗲𝗻𝘂
│ 📜 𝗔𝗹𝗹𝗺𝗲𝗻𝘂         👑 𝗢𝘄𝗻𝗲𝗿𝗺𝗲𝗻𝘂
│ 🧩 𝗢𝘁𝗵𝗲𝗿𝗺𝗲𝗻𝘂       🖌️ 𝗟𝗼𝗴𝗼
│ 📦 𝗥𝗲𝗽𝗼
╰────────────────────────────╯
📌 *${config.DESCRIPTION}*

`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '20363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send local audio from assets/menu.m4a

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: true,
}, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});

cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🧃",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Logo List* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• neonlight
┃◈┃• blackpink
┃◈┃• dragonball
┃◈┃• 3dcomic
┃◈┃• america
┃◈┃• naruto
┃◈┃• sadgirl
┃◈┃• clouds
┃◈┃• futuristic
┃◈┃• 3dpaper
┃◈┃• eraser
┃◈┃• sunset
┃◈┃• leaf
┃◈┃• galaxy
┃◈┃• sans
┃◈┃• boom
┃◈┃• hacker
┃◈┃• devilwings
┃◈┃• nigeria
┃◈┃• bulb
┃◈┃• angelwings
┃◈┃• zodiac
┃◈┃• luxury
┃◈┃• paint
┃◈┃• frozen
┃◈┃• castle
┃◈┃• tatoo
┃◈┃• valorant
┃◈┃• bear
┃◈┃• typography
┃◈┃• birthday
┃◈└───────────┈⊷
╰──────────────┈⊷`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: "DML",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `╭─〔 😹 ＲＥＡＣＴＩＯＮＳ 〕─╮
│ 🤗 hug       😘 kiss      👅 lick
│ 🔨 bonk      🤢 cringe    😢 cry
│ 🧸 cuddle    🙃 smug       🧠 poke
│ 🚀 yeet      ✋ highfive   👋 wave
│ 😄 smile     😠 kill       😉 wink
╰──────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭─〔 ⬇️ ＤＯＷＮＬＯＡＤＳ 〕─╮
│ 📹 facebook/mediafire     🎵 tiktok/twitter
│ 📷 insta/pins             📥 apk/img
│ 🎧 spotify/play1-10       📽️ video1-10
│ 🎶 ytmp3/ytmp4            🎼 song/darama
│ ☁️ gdrive                 🌐 ssweb
╰──────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭─〔 👥 ＧＲＯＵＰ ＦAＮＣＴＩＯＮＳ 〕─╮
│ 🔗 grouplink      ➕ add ➖ remove
│ 🚪 kick           🔺 promote 🔻 demote
│ 🔒 lockgc         🔓 unlockgc
│ 👋 welcome/goodbye🧹 dismiss/revoke
│ 🗑️ delete         🖼️ getpic
│ ℹ️ ginfo          ⏳ disappear on/off
│ ✏️ updategname    📘 updategdesc
│ 👥 tag/tagall/admins  🙈 hidetag
│ 🔕 mute/unmute    📥 joinrequests
╰────────────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭─〔 🎉 ＦＵＮ ＣＯ𝗠𝗠𝗔𝗡𝗗𝗦 〕─╮
│ 🤓 shapar    🔢 rate     😤 insult
│ 🧠 hack      ❤️ ship     🤯 character
│ 💬 pickup    😂 joke     💖 hrt
│ 😡 anger     🤫 shy      👏 hifi
│ ✋ hand       👈 poke     👐 hug
╰──────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `ttps://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭─〔 🧩 Ｂ𝗢𝗡𝗨𝗦 Ｔ𝗢𝗢𝗟𝗦 〕─╮
│ 🕐 timenow      📅 date       🎲 flip/roll
│ 📚 wikipedia    🧮 calculate   🔠 fancy
│ 💾 save         🎥 movie       📰 news
│ ☁️ gpass        👨‍💻 githubstalk
╰────────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `ttps://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭─〔 👑 ＯＷＮＥＲ ＣＯＭＭＡＮＤＳ 〕─╮
│ 🧾 owner        📜 menu/menu2
│ 📦 listcmd      📋 allmenu
│ 🧰 repo         🚫 block/unblock
│ 🖼️ setpp/fullpp 🔄 restart/shutdown
│ 🔄 updatecmd    💡 alive/ping
│ 🆔 gjid/jid
╰────────────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• emojimix
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• tinyurl
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• url
┃◈┃• repeat 
┃◈┃• ask
┃◈┃• readmore
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭─〔 🔁 ＣＯＮＩＩＥＲＴ ＭＥＮＵ 〕─╮
│ 🖼️ sticker/sticker2    🌀 emojimix
│ ✨ fancy               🎁 take
│ 🔊 tomp3              🗣️ tts
│ 🔠 base64/binary      💡 calculate
│ 🌐 url encode/decode  📜 readmore
╰────────────────────────╯

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt3
┃◈┃• gpt2
┃◈┃• gptmini
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• luma
┃◈┃• dj 
┃◈┃• khan
┃◈┃• jawad
┃◈┃• gpt4
┃◈┃• bing
┃◈┃• imagine 
┃◈┃• imagine2
┃◈┃• copilot
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/vcdwmp.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: 'DML',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
