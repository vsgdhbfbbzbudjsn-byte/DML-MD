const { cmd } = require("../command"); // Import command handler

cmd({
  pattern: "dml",
  react: "💰",
  alias: ["payment"],
  desc: "Displays Dml payment details with your USD address.",
  category: "finance",
  use: ".binance",
  filename: __filename
}, 
async (conn, mek, m, { from }) => {
  try {
    const binanceImage = "https://files.catbox.moe/khxnbd.jpg"; // Binance image URL
    const binanceID = "255713541112";
    const usdAddress = "0152928279700";

    const caption = `╔✦『 *DML PAYMENT* 』✦╗
║💳 *Dml ID:* \`${binanceID}\`
║💵 *USD Address:* \`${usdAddress}\`
║🔗 *Send your payments securely!*
╚═══════════════╝
> POWERED BY DML-MD `;

    await conn.sendMessage(from, { image: { url: binanceImage }, caption }, { quoted: m });
  } catch (error) {
    console.error("Error in Dml command:", error);
    await conn.sendMessage(from, { text: "❌ An error occurred while fetching Binance details." }, { quoted: m });
  }
});


cmd({
  pattern: "opay",
  react: "🏦",
  alias: ["bank", "payment2"],
  desc: "Displays Opay payment details.",
  category: "finance",
  use: ".opay",
  filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
  try {
    const opayImage = "https://files.catbox.moe/khxnbd.jpg"; // Image URL
    const accountNumber = "255713541112";
    const accountName = "Daudy Musa";
    const bankName = "Crdb";

    const caption = `╔═✦『 *DML PAYMENT* 』✦╗
║🏦 *Bank Name:* \`${bankName}\`
║👤 *Account Name:* \`${accountName}\`
║💳 *Account Number:* \`${accountNumber}\`
║🔗 *Make payments securely!*
║🖼️ *screenshot(ss) needed*
║🖼️ *send ss here https://wa.me/255622220680*
╚═══════════════╝
> POWERED BY DML-MD `;

    await conn.sendMessage(from, { image: { url: opayImage }, caption }, { quoted: mek });
  } catch (error) {
    console.error("Error in Opay command:", error);
    reply("❌ An error occurred while fetching Opay details.");
  }
});



cmd({
  pattern: "popay",
  react: "🏦",
  alias: ["bank2", "opay2"],
  desc: "Displays Opay payment details.",
  category: "finance",
  use: ".opay",
  filename: __filename
}, 
async (conn, mek, m, { from, reply }) => {
  try {
    const opayImage = "https://files.catbox.moe/khxnbd.jpg"; // Image URL
    const accountNumber = "255713541112";
    const accountName = "Daudy Musa";
    const bankName = "crdb";

    const caption = `╔═✦『 *DML PAYMENT* 』✦╗
║🏦 *Bank Name:* \`${bankName}\`
║👤 *Account Name:* \`${accountName}\`
║💳 *Account Number:* \`${accountNumber}\`
║🔗 *Make payments securely!*
║🖼️ *screenshot(ss) needed*
║🖼️ *send ss here https://wa.me/255622220680*
╚═══════════════╝
> POWERED BY DML-MD `;

    await conn.sendMessage(from, { image: { url: opayImage }, caption }, { quoted: mek });
  } catch (error) {
    console.error("Error in Opay command:", error);
    reply("❌ An error occurred while fetching Opay details.");
  }
});
