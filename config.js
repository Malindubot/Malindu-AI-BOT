const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Malindubot/Malindu-AI-BOT/blob/main/images/Gemini_Generated_Image_b2vl32b2vl32b2vl.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Malindu AI BOT Is Alive Now😍*",
BOT_OWNER: '94701369636',  // Replace with the owner's phone number



};
