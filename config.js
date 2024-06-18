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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_38_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRdUl3SzVKcDF5eEVsT1ZWSjVvdnhlN0laak0vOTRpK0NRcFNncWcwQS84PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMUzRtaXg5VlMxeURNdFkxYUtsTjh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE0NGQwZmZlLWNhZmMtNGYzYi05NTk1LTA5YzEwNmMwZmI3NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDg0LFxuICAgICAgMjI4LFxuICAgICAgMjA1LFxuICAgICAgMTA5LFxuICAgICAgNjEsXG4gICAgICAyMDEsXG4gICAgICA4MSxcbiAgICAgIDkzLFxuICAgICAgMzQsXG4gICAgICAxNTQsXG4gICAgICAxMTYsXG4gICAgICAxNjEsXG4gICAgICA0MCxcbiAgICAgIDIxNSxcbiAgICAgIDI3LFxuICAgICAgMjE2LFxuICAgICAgMTgxLFxuICAgICAgMjQxLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxMTQsXG4gICAgICAyMjcsXG4gICAgICA0MCxcbiAgICAgIDE4OSxcbiAgICAgIDEzNSxcbiAgICAgIDQ2LFxuICAgICAgNTcsXG4gICAgICA1MixcbiAgICAgIDIyMyxcbiAgICAgIDIyMCxcbiAgICAgIDEyMyxcbiAgICAgIDExNixcbiAgICAgIDExLFxuICAgICAgNjAsXG4gICAgICAyMTIsXG4gICAgICAxMDcsXG4gICAgICAxNTMsXG4gICAgICA4OCxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRWldQSEtWUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2OTAwNzA0Mjc2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQxMzE5MjQ1NDM2MDo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKbgeKDn+KLhs2ZzIjwnZWC8J2VhvCdlYzwnZWK8J2VgPCdlYLim4Pig5/ii4bNmcyIIOC/kOC8teC9veKbgeKDn+KLhs2ZzIhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQyt1RUlReXJmR3N3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBnaEppTnZWYy9iUjF2cDJPMnc3ZWU3VzM2dGRLYnlwZ1h1eitoaXpHUU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUnFyRWFGeEM3MVB5eTRxRGVLZWZNVzl1N21iK0llNnR1djEzYU8yNTc1bGxsSXRnM1AwYWFUYVlVOVFWT2RhQjg4WVkyaCtYUyt2QkhpUTVMTDR3RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicEcrT004SDRnZHVYcUliYnE3d1FYNGhaTng4bXFCd1JDZ1p2blBqTSthZmd2Q05aMmh0c3FwV29yeGNmd0VVaUFKTHBURkpGb2N4OTBJcDZTWTYyaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2OTAwNzA0Mjc2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3MjE0ODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJcTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlxNi5qc29uIjogIntcImtleURhdGFcIjpcIlFDbWh1L1JYV3RhT01QWkNQQlR4VGxhV09HTTJlR1VFcVNpTUdhcmltYzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5MzM3NTM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
