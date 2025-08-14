const fetch = require("node-fetch");
const FormData = require("form-data");
const {
  cmd
} = require("../command");
cmd({
  'pattern': 'hd',
  'alias': ["remini", "tohd"],
  'desc': "Enhance photo quality using AI (like Remini)",
  'category': "tools",
  'filename': __filename,
  'use': ".hd (reply to an image)"
}, async (_0x1bb9c7, _0x1bd8b9, _0x378966, {
  reply: _0x3e2747
}) => {
  await _0x1bb9c7.sendMessage(_0x1bd8b9.key.remoteJid, {
    'react': {
      'text': '📹',
      'key': _0x1bd8b9.key
    }
  });
  try {
    let _0x2e27d = _0x1bd8b9.quoted || _0x1bd8b9;
    let _0x2cf5b3 = (_0x2e27d.msg || _0x2e27d).mimetype || _0x2e27d.mimetype || _0x2e27d.mediaType || '';
    if (!_0x2cf5b3) {
      throw "📷 Please send or reply to an image first.";
    }
    if (!/image\/(jpe?g|png)/.test(_0x2cf5b3)) {
      throw "❌ The format *" + _0x2cf5b3 + "* is not supported.";
    }
    let _0xa0e704 = await _0x2e27d.download?.();
    if (!_0xa0e704) {
      throw "❌ Failed to download the image.";
    }
    const _0x353902 = await uploadToCatbox(_0xa0e704);
    const _0x709ae5 = "https://zenz.biz.id/tools/remini?url=" + encodeURIComponent(_0x353902);
    const _0x342dfc = await fetch(_0x709ae5);
    if (!_0x342dfc.ok) {
      throw "❌ Error accessing the Remini API.";
    }
    const _0x3b5fb4 = await _0x342dfc.json();
    if (!_0x3b5fb4.status || !_0x3b5fb4.result?.["result_url"]) {
      throw "❌ Invalid response from API.";
    }
    const _0x4d1b85 = await fetch(_0x3b5fb4.result.result_url).then(_0x309b76 => _0x309b76.buffer());
    if (!_0x4d1b85 || _0x4d1b85.length === 0x0) {
      throw "❌ Failed to fetch enhanced image.";
    }
    await _0x1bb9c7.sendMessage(_0x1bd8b9.chat, {
      'image': _0x4d1b85,
      'caption': "> *For more info follow our channel*"
    }, {
      'quoted': _0x1bd8b9
    });
  } catch (_0x26d503) {
    await _0x1bb9c7.sendMessage(_0x1bd8b9.chat, {
      'react': {
        'text': '❌',
        'key': _0x1bd8b9.key
      }
    });
    console.error(_0x26d503);
    _0x3e2747(typeof _0x26d503 === 'string' ? _0x26d503 : "❌ An error occurred. Please try again later.");
  }
});
async function uploadToCatbox(_0x1a7c1d) {
  const _0x4ce8a8 = new FormData();
  _0x4ce8a8.append("reqtype", "fileupload");
  _0x4ce8a8.append('fileToUpload', _0x1a7c1d, "image.jpg");
  const _0x457ad0 = await fetch("https://catbox.moe/user/api.php", {
    'method': "POST",
    'body': _0x4ce8a8
  });
  const _0x59a56c = await _0x457ad0.text();
  if (!_0x59a56c.startsWith('https://')) {
    throw "❌ Error while uploading image to Catbox.";
  }
  return _0x59a56c.trim();
}
