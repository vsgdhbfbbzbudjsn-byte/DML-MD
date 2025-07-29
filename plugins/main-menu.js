const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const fs = require('fs');
const path = require('path');

cmd({
    pattern: "menu",
    alias: ["allmenu", "fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "⤵️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // Random image from /scs folder
        const scsFolder = path.join(__dirname, "../Dml");
        const images = fs.readdirSync(scsFolder).filter(f => /^menu\d+\.jpg$/i.test(f));
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imagePath = path.join(scsFolder, randomImage);

        let dec = ` ╭─〔 🚀 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 〕─╮
┃ 👑 Owner     : ${config.OWNER_NAME}
┃ ⚙️ Prefix    : [${config.PREFIX}]
┃ 🌐 Platform  : Heroku
┃ 📦 Version   : 4.0.0
┃ ⏱️ Runtime   : ${runtime(process.uptime())}
╰────────────────────────╯

╭──〔 📥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〕──╮
┃ 🟦 facebook
┃ 📁 mediafire
┃ 🎵 tiktok
┃ 🐦 twitter
┃ 📷 insta
┃ 📦 apk
┃ 🖼️ img
┃ ▶️ tt2
┃ 📌 pins
┃ 🔄 apk2
┃ 🔵 fb2
┃ 📍 pinterest
┃ 🎶 spotify
┃ 🎧 play
┃ 🎧 play2
┃ 🔉 audio
┃ 🎬 video
┃ 📹 video2
┃ 🎵 ytmp3
┃ 📹 ytmp4
┃ 🎶 song
┃ 🎬 darama
┃ ☁️ gdrive
┃ 🌐 ssweb
┃ 🎵 tiks
╰────────────────────────╯

╭──〔 👥 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 〕──╮
┃ 🔗 grouplink
┃ ➕ add
┃ ➖ remove
┃ 👢 kick
┃ ⬆️ promote
┃ ⬇️ demote
┃ 🚮 dismiss
┃ 🔄 revoke
┃ 👋 setgoodbye
┃ 🎉 setwelcome
┃ 🗑️ delete
┃ 🖼️ getpic
┃ ℹ️ ginfo
┃ ⏳ disappear on/off/7D
┃ 📝 updategname
┃ 📝 updategdesc
┃ 📩 joinrequests
┃ 📨 senddm
┃ 🏃 nikal
┃ 🔇 mute
┃ 🔊 unmute
┃ 🔒 lockgc
┃ 🔓 unlockgc
┃ 📩 invite
┃ #️⃣ tag
┃ 🏷️ hidetag
┃ @️⃣ tagall
┃ 👔 tagadmins
╰────────────────────────╯

╭──〔 🎭 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡𝗦 𝗠𝗘𝗡𝗨 〕──╮
┃ 👊 bully
┃ 🤗 cuddle
┃ 😢 cry
┃ 🤗 hug
┃ 🐺 awoo
┃ 💋 kiss
┃ 👅 lick
┃ 🖐️ pat
┃ 😏 smug
┃ 🔨 bonk
┃ 🚀 yeet
┃ 😊 blush
┃ 😄 smile
┃ 👋 wave
┃ ✋ highfive
┃ 🤝 handhold
┃ 🍜 nom
┃ 🦷 bite
┃ 🤗 glomp
┃ 👋 slap
┃ 💀 kill
┃ 😊 happy
┃ 😉 wink
┃ 👉 poke
┃ 💃 dance
┃ 😬 cringe
╰────────────────────────╯

╭──〔 🎨 𝗟𝗢𝗚𝗢 𝗠𝗔𝗞𝗘𝗥 〕──╮
┃ 💡 neonlight
┃ 🎀 blackpink
┃ 🐉 dragonball
┃ 🎭 3dcomic
┃ 🇺🇸 america
┃ 🍥 naruto
┃ 😢 sadgirl
┃ ☁️ clouds
┃ 🚀 futuristic
┃ 📜 3dpaper
┃ ✏️ eraser
┃ 🌇 sunset
┃ 🍃 leaf
┃ 🌌 galaxy
┃ 💀 sans
┃ 💥 boom
┃ 💻 hacker
┃ 😈 devilwings
┃ 🇳🇬 nigeria
┃ 💡 bulb
┃ 👼 angelwings
┃ ♈ zodiac
┃ 💎 luxury
┃ 🎨 paint
┃ ❄️ frozen
┃ 🏰 castle
┃ 🖋️ tatoo
┃ 🔫 valorant
┃ 🐻 bear
┃ 🔠 typography
┃ 🎂 birthday
╰────────────────────────╯

╭──〔 👑 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〕──╮
┃ 👑 owner
┃ 📜 menu
┃ 📊 vv
┃ 📋 listcmd
┃ 📚 allmenu
┃ 📦 repo
┃ 🚫 block
┃ ✅ unblock
┃ 🖼️ fullpp
┃ 🖼️ setpp
┃ 🔄 restart
┃ ⏹️ shutdown
┃ 🔄 updatecmd
┃ 💚 alive
┃ 🏓 ping
┃ 🆔 gjid
┃ 🆔 jid
╰────────────────────────╯

╭──〔 🎉 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〕──╮
┃ 🤪 shapar
┃ ⭐ rate
┃ 🤬 insult
┃ 💻 hack
┃ 💘 ship
┃ 🎭 character
┃ 💌 pickup
┃ 😆 joke
┃ ❤️ hrt
┃ 😊 hpy
┃ 😔 syd
┃ 😠 anger
┃ 😳 shy
┃ 💋 kiss
┃ 🧐 mon
┃ 😕 cunfuzed
┃ ✋ hand
┃ 🤲 hold
┃ 🤗 hug
┃ 👉 poke
┃ 🎵 hifi
╰────────────────────────╯

╭──〔 🔄 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 〕──╮
┃ 🏷️ sticker
┃ 🏷️ sticker2
┃ 😀 emojimix
┃ ✨ fancy
┃ 🖼️ take
┃ 🎵 tomp3
┃ 🗣️ tts
┃ 🌐 trt
┃ 🔢 base64
┃ 🔠 unbase64
┃ 010 binary
┃ 🔤 dbinary
┃ 🔗 tinyurl
┃ 🌐 urldecode
┃ 🌐 urlencode
┃ 🌐 url
┃ 🔁 repeat
┃ ❓ ask
┃ 📖 readmore
╰────────────────────────╯

╭──〔 🤖 𝗔𝗜 𝗠𝗘𝗡𝗨 〕──╮
┃ 🧠 ai
┃ 🤖 gpt3
┃ 🤖 gpt2
┃ 🤖 gptmini
┃ 🤖 gpt
┃ 🔵 meta
┃ 📦 blackbox
┃ 🌈 luma
┃ 🎧 dj
┃ 👑 dml1
┃ 🤵 dml
┃ 🧠 gpt4
┃ 🔍 bing
┃ 🎨 imagine
┃ 🖼️ imagine2
┃ 🤖 copilot
╰────────────────────────╯

╭──〔 ⚡ 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〕──╮
┃ 🏓 ping
┃ 🏓 ping2
┃ 🚀 speed
┃ 📡 live
┃ 💚 alive
┃ ⏱️ runtime
┃ ⏳ uptime
┃ 📦 repo
┃ 👑 owner
┃ 📜 menu
┃ 📜 menu2
┃ 🔄 restart
╰────────────────────────╯

╭──〔 🎎 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 〕──╮
┃ 🤬 fack
┃ ✅ truth
┃ 😨 dare
┃ 🐶 dog
┃ 🐺 awoo
┃ 👧 garl
┃ 👰 waifu
┃ 🐱 neko
┃ 🧙 megnumin
┃ 👗 maid
┃ 👧 loli
┃ 🎎 animegirl(1–5)
┃ 🎬 anime(1–5)
┃ 📰 animenews
┃ 🦊 foxgirl
┃ 🍥 naruto
╰────────────────────────╯

╭──〔 ℹ️ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 〕──╮
┃ 🕒 timenow
┃ 📅 date
┃ 🔢 count
┃ 🧮 calculate
┃ 🔢 countx
┃ 🎲 flip
┃ 🪙 coinflip
┃ 🎨 rcolor
┃ 🎲 roll
┃ ℹ️ fact
┃ 💻 cpp
┃ 🎲 rw
┃ 💑 pair(1–3)
┃ ✨ fancy
┃ 🎨 logo <text>
┃ 📖 define
┃ 📰 news
┃ 🎬 movie
┃ ☀️ weather
┃ 🤬 insult
┃ 💾 save
┃ 🌐 wikipedia
┃ 🔑 gpass
┃ 👤 githubstalk
┃ 🔍 yts
┃ 📹 ytv
╰────────────────────────╯
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: imagePath },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363387497418815@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
