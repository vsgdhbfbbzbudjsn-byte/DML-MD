const {
  cmd
} = require("../command");
const axios = require("axios");
const moment = require("moment-timezone");
const customReplies = _0x17f87b => {
  const _0x3c0c6f = _0x17f87b.toLowerCase();
  const _0x564237 = moment().tz("Africa/Nairobi");
  if (_0x3c0c6f.includes("pk-xmd")) {
    return "🔥 DML-MD is a Multi-Device WhatsApp Bot made by *DML*.";
  }
  if (_0x3c0c6f.includes('pkdriller')) {
    return "👑 DML is the official creator of the *DML-MD* WhatsApp bot.";
  }
  if (_0x3c0c6f.includes('channel')) {
    return "📢 Official channel: https://whatsapp.com/channel/0029Vb2hoPpDZ4Lb3mSkVI3C";
  }
  if (_0x3c0c6f.includes("repo") || _0x3c0c6f.includes("github")) {
    return "🔗 GitHub repo: https://github.com/MLILA17/DML-MD";
  }
  if (_0x3c0c6f.includes("date") || _0x3c0c6f.includes("today")) {
    return "📅 Today is " + _0x564237.format("dddd, MMMM Do YYYY");
  }
  if (_0x3c0c6f.includes("day")) {
    return "📆 Today is *" + _0x564237.format("dddd") + '*';
  }
  if (_0x3c0c6f.includes("time") || _0x3c0c6f.includes('clock')) {
    return "⏰ Time in Nairobi: *" + moment().tz("Africa/Nairobi").format("HH:mm:ss") + '*';
  }
  return null;
};
cmd({
  'pattern': 'ai',
  'alias': ["bot", 'dj', 'gpt', "gpt4", 'bing'],
  'desc': "Chat with an AI model",
  'category': 'ai',
  'react': '🤖',
  'filename': __filename
}, async (_0x1fea78, _0x1ef719, _0x469eeb, {
  q: _0x1b5bad,
  reply: _0x49ec2f
}) => {
  try {
    if (!_0x1b5bad) {
      return _0x49ec2f("Please provide a message for the AI.\nExample: `.ai Hello`");
    }
    const _0x57bd65 = customReplies(_0x1b5bad);
    if (_0x57bd65) {
      return _0x1fea78.sendMessage(_0x469eeb.chat, {
        'text': _0x57bd65,
        'contextInfo': {
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "AI Response",
            'body': "DML-MD | Multi-Device WhatsApp Bot",
            'thumbnailUrl': undefined || "https://files.catbox.moe/7dkq50.jpg",
            'sourceUrl': undefined || "https://github.com/MLILA17/DML-MD"
          },
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363387497418815@newsletter",
            'newsletterName': "DML"
          }
        }
      });
    }
    const _0x495d6b = await axios.get("https://lance-frank-asta.onrender.com/api/gpt?q=" + encodeURIComponent(_0x1b5bad));
    if (!_0x495d6b.data || !_0x495d6b.data.message) {
      return _0x49ec2f("AI failed to respond.");
    }
    const _0x4e4907 = moment().tz("Africa/Nairobi").format("HH:mm:ss");
    return _0x1fea78.sendMessage(_0x469eeb.chat, {
      'text': "🤖 *AI Response:*\n\n" + _0x495d6b.data.message + "\n\n⏰ *Time:* " + _0x4e4907,
      'contextInfo': {
        'externalAdReply': {
          'showAdAttribution': true,
          'title': "AI Response",
          'body': "DML-MD | Multi-Device WhatsApp Bot",
          'thumbnailUrl': undefined || "https://files.catbox.moe/7dkq50.jpg",
          'sourceUrl': undefined || "https://github.com/MLILA17/DML-MD"
        },
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363387497418815@newsletter",
          'newsletterName': "DML"
        }
      }
    });
  } catch (_0x3909ce) {
    console.error("AI Error:", _0x3909ce);
    _0x49ec2f("❌ Error occurred.");
  }
});
cmd({
  'pattern': 'openai',
  'alias': ["chatgpt", "gpt3", 'open-gpt'],
  'desc': "Chat with OpenAI",
  'category': 'ai',
  'react': '🧠',
  'filename': __filename
}, async (_0x28c3c2, _0x4ce641, _0xe4eb2c, {
  q: _0x39f861,
  reply: _0x3f4b9c
}) => {
  try {
    if (!_0x39f861) {
      return _0x3f4b9c("Please provide a message for OpenAI.\nExample: `.openai Hello`");
    }
    const _0x266925 = customReplies(_0x39f861);
    if (_0x266925) {
      return _0x28c3c2.sendMessage(_0xe4eb2c.chat, {
        'text': _0x266925,
        'contextInfo': {
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "OpenAI Response",
            'body': "DML-MD | Multi-Device WhatsApp Bot",
            'thumbnailUrl': undefined || "https://files.catbox.moe/7dkq50.jpg",
            'sourceUrl': undefined || "https://github.com/MLILA17/DML-MD"
          },
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363387497418815@newsletter",
            'newsletterName': "DML-CHANNEL"
          }
        }
      });
    }
    const _0x1bc786 = await axios.get("https://vapis.my.id/api/openai?q=" + encodeURIComponent(_0x39f861));
    if (!_0x1bc786.data || !_0x1bc786.data.result) {
      return _0x3f4b9c("OpenAI failed to respond.");
    }
    const _0x7d45c5 = moment().tz("Africa/Nairobi").format("HH:mm:ss");
    return _0x28c3c2.sendMessage(_0xe4eb2c.chat, {
      'text': "🧠 *OpenAI Response:*\n\n" + _0x1bc786.data.result + "\n\n⏰ *Time:* " + _0x7d45c5,
      'contextInfo': {
        'externalAdReply': {
          'showAdAttribution': true,
          'title': "OpenAI Response",
          'body': "DML-MD | Multi-Device WhatsApp Bot",
          'thumbnailUrl': undefined || "https://files.catbox.moe/7dkq50.jpg",
          'sourceUrl': undefined || "https://github.com/MLILA17/DML-MD"
        },
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363387497418815@newsletter",
          'newsletterName': "DML-MD Updates"
        }
      }
    });
  } catch (_0x5a09b2) {
    console.error("OpenAI Error:", _0x5a09b2);
    _0x3f4b9c("❌ Error occurred.");
  }
});
cmd({
  'pattern': "deepseek",
  'alias': ["deep", 'seekai'],
  'desc': "Chat with DeepSeek AI",
  'category': 'ai',
  'react': '🧠',
  'filename': __filename
}, async (_0x5bce22, _0x2fc054, _0x14609c, {
  q: _0x3ce603,
  reply: _0x1abd5a
}) => {
  try {
    if (!_0x3ce603) {
      return _0x1abd5a("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");
    }
    const _0x1d3117 = customReplies(_0x3ce603);
    if (_0x1d3117) {
      return _0x5bce22.sendMessage(_0x14609c.chat, {
        'text': _0x1d3117,
        'contextInfo': {
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "DeepSeek Response",
            'body': "DML-MD | Multi-Device WhatsApp Bot",
            'thumbnailUrl': undefined || "https://files.catbox.moe/fgiecg.jpg",
            'sourceUrl': undefined || "https://github.com/MLILA17/DML-MD"
          },
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363387497418815@newsletter",
            'newsletterName': "DML-MD Updates"
          }
        }
      });
    }
    const _0x19f307 = await axios.get("https://api.ryzendesu.vip/api/ai/deepseek?text=" + encodeURIComponent(_0x3ce603));
    if (!_0x19f307.data || !_0x19f307.data.answer) {
      return _0x1abd5a("DeepSeek failed to respond.");
    }
    const _0x47fc7a = moment().tz("Africa/Nairobi").format("HH:mm:ss");
    return _0x5bce22.sendMessage(_0x14609c.chat, {
      'text': "🧠 *DeepSeek AI Response:*\n\n" + _0x19f307.data.answer + "\n\n⏰ *Time:* " + _0x47fc7a,
      'contextInfo': {
        'externalAdReply': {
          'showAdAttribution': true,
          'title': "DeepSeek Response",
          'body': "DML-MD | Multi-Device WhatsApp Bot",
          'thumbnailUrl': undefined || "https://files.catbox.moe/juhq1l.jpg",
          'sourceUrl': undefined || "https://files.catbox.moe/juhq1l.jpg"
        },
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363387497418815@newsletter",
          'newsletterName': "DML-MD Updates"
        }
      }
    });
  } catch (_0x3f1822) {
    console.error("DeepSeek Error:", _0x3f1822);
    _0x1abd5a("❌ Error occurred.");
  }
});
