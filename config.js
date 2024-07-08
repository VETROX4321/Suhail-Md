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


global.devs = "923184474178" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+91 69007 04276";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_25_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBUTUd2alFmZmhuUnZlL2JyODV2REhLdHdMZDJWRHhHN055bWx6Y29QV0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE2OTAwNzA0Mjc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MUM3MTFDRTlGRDUxQkJDOUQwMjAzMjBBOUVCRDM5QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMDMxMTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTY5MDA3MDQyNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0NDZENjgxRTBDNjYyNzFCQ0YyRjZGMjQxOTM2QkNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDEwMzExMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtdU5UVWR3bFFHU3VrdHhxbERLMExRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0YWI1OTA5LTAxOTYtNDUzNS04YTE3LWY3Zjk2NTMxY2E1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAzNixcbiAgICAgIDY0LFxuICAgICAgNCxcbiAgICAgIDIzNSxcbiAgICAgIDIzNyxcbiAgICAgIDIwOCxcbiAgICAgIDY0LFxuICAgICAgMTI3LFxuICAgICAgNDEsXG4gICAgICA1NSxcbiAgICAgIDAsXG4gICAgICA5NCxcbiAgICAgIDg4LFxuICAgICAgOTMsXG4gICAgICAyMyxcbiAgICAgIDI2LFxuICAgICAgMTUyLFxuICAgICAgMTA4LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE3OSxcbiAgICAgIDEyNSxcbiAgICAgIDI1NCxcbiAgICAgIDEyMixcbiAgICAgIDc3LFxuICAgICAgNjIsXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAyNDcsXG4gICAgICA2OCxcbiAgICAgIDYsXG4gICAgICAyOCxcbiAgICAgIDE0MCxcbiAgICAgIDE0MSxcbiAgICAgIDUxLFxuICAgICAgMjUyLFxuICAgICAgMjM4LFxuICAgICAgMzUsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFSEtSTkg3VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2OTAwNzA0Mjc2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQxMzE5MjQ1NDM2MDo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKbgeKDn+KLhs2ZzIjwnZWC8J2VhvCdlYzwnZWK8J2VgPCdlYLim4Pig5/ii4bNmcyIIOC/kOC8teC9veKbgeKDn+KLhs2ZzIhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQyt1RUlRditHYXRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBnaEppTnZWYy9iUjF2cDJPMnc3ZWU3VzM2dGRLYnlwZ1h1eitoaXpHUU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSk9OQXhtZXFwTzBzK25PbzQ0SDdYQ2hGbWt6N3dOVXJVMlVOblQ2bjVVc3hJSkxuMjhBTVMzb0hFd1pmTUNyaGs1THZtOUd0SDdiQy8rWDRSbkplQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSjgzQmNVaGZlR2ZxVWE4aWRnUXFQUm4xVzFMekpSWjdYcFlWV2RVUDgzYUtEWTE5VnByMTFlWllPOWlDbEFXTFdvbG03TUNDWkw3bjdoNEtMamU5Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2OTAwNzA0Mjc2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMDMxMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJcTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlxNi5qc29uIjogIntcImtleURhdGFcIjpcIlFDbWh1L1JYV3RhT01QWkNQQlR4VGxhV09HTTJlR1VFcVNpTUdhcmltYzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5MzM3NTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(



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
