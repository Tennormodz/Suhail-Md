const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254104245659" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254104245659";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/7acedebb14b8de43a6914.png" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_38_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3K1dhN2JtaDFhTWpJR0pVOSt3bzE2VHNmQklwR0tIWTl6cllmNG5uNFprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMSm82LWlraVNXSzI0akExVllmdTV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2ZjNhOTM3LTQyYmMtNDEzOS04ODcyLTZmMWM4ZjFlN2E4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxMjMsXG4gICAgICAxMDEsXG4gICAgICAxNDAsXG4gICAgICAyMjUsXG4gICAgICAyNCxcbiAgICAgIDM2LFxuICAgICAgMTg1LFxuICAgICAgNDcsXG4gICAgICA5NyxcbiAgICAgIDEzLFxuICAgICAgMixcbiAgICAgIDE5NCxcbiAgICAgIDIwNyxcbiAgICAgIDUsXG4gICAgICAyMTAsXG4gICAgICAxNDIsXG4gICAgICAyNCxcbiAgICAgIDQ4LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDEwNSxcbiAgICAgIDkxLFxuICAgICAgOTQsXG4gICAgICA1MyxcbiAgICAgIDQ5LFxuICAgICAgMTQsXG4gICAgICA0NyxcbiAgICAgIDEyNixcbiAgICAgIDY3LFxuICAgICAgMTUzLFxuICAgICAgNjgsXG4gICAgICAyMDcsXG4gICAgICAxODAsXG4gICAgICAxNDgsXG4gICAgICAyMSxcbiAgICAgIDkzLFxuICAgICAgMTAxLFxuICAgICAgMzcsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUFGUkFUSE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwNDI0NTY1OToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5NzU2NzMyOTA3NzIyOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wrT2s4Y0hFSkd0dUxVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTlVDUXVUTko0ZFJyU1lYR0VDbFU5SXhvVFR6QzRlclo3ZUhuL2tvQi9SST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRNm1YLzc1U3lRUEt3ZHpVWGRmSll1M3B2Qnlzd09KOWVJalJCY2RMY0lxMXUrTlVSWEdaZVU5V2xvOG9ybVZTaHFvN0huZG9iK3lDQUN1TXZ0NldEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIVDVDRWJNbjFpWW1nK2paUllqSnBRL1ZQeFQ1c1BWMlBnZ0E5eGxEZjdqQWVBWThkS25nZUdkN1dVQ3RzSE12L240dFZMSTRzTnlka0FCbHR3QXdDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDQyNDU2NTk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjg1MDc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0k2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSTYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLSkdiYklPbGJuZ2dsbnN2UEwyR0lwVGRPbWovT1AxbVZFWDBWc0VJVXRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjgyNTkxMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ TENNOR²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Tennor-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝙏𝙚𝙣𝙣𝙤𝙧 𝙏𝙤𝙩𝙤𝙤'𝙨 𝙁𝙖𝙫♀️💟",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TENNOR"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
