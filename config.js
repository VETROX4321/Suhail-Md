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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_47_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldZbWY3QW5kK2FvMDJHbFZIQTEvalY1TkwrMTR5SzRsV0JjbGZRalZuWk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd1NlBNVXdOUV91dHlDSUZGYzhVR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWU2MzQzYmEtZDcxNi00MGZmLWEwZGQtNThmMGIwOWMzMjBkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgNjcsXG4gICAgICA1OSxcbiAgICAgIDcyLFxuICAgICAgMjgsXG4gICAgICAxNDIsXG4gICAgICAxNjQsXG4gICAgICAyNTQsXG4gICAgICAxMDIsXG4gICAgICAyMjYsXG4gICAgICAxLFxuICAgICAgMTIsXG4gICAgICAxODcsXG4gICAgICA0MyxcbiAgICAgIDE4OSxcbiAgICAgIDE2MixcbiAgICAgIDE0MSxcbiAgICAgIDI1MixcbiAgICAgIDE2MSxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxOTYsXG4gICAgICA3MSxcbiAgICAgIDIzOCxcbiAgICAgIDExMyxcbiAgICAgIDI0MCxcbiAgICAgIDIzMSxcbiAgICAgIDExOCxcbiAgICAgIDIxMixcbiAgICAgIDEzLFxuICAgICAgOTgsXG4gICAgICAxMjUsXG4gICAgICA4MCxcbiAgICAgIDE0OCxcbiAgICAgIDE3MyxcbiAgICAgIDE0NyxcbiAgICAgIDExMCxcbiAgICAgIDEwMCxcbiAgICAgIDk0LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFOUjRWM0JRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTY5MDA3MDQyNzY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3NDEzMTkyNDU0MzYwOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4puB4oOf4ouGzZnMiPCdlYLwnZWG8J2VjPCdlYrwnZWA8J2VguKbg+KDn+KLhs2ZzIgg4L+Q4Ly14L294puB4oOf4ouGzZnMiFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DK3VFSVFtSnJKdEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUGdoSmlOdlZjL2JSMXZwMk8ydzdlZTdXMzZ0ZEtieXBnWHV6K2hpekdRTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkVUJITjBqMmJKcXZOZmM0OElKMzlERGRwbU5jaDhxUEtjYkhZekc5RkJUcjNkSkF5ZWpBMWlUenUrY3dVZEh2Wmg4SXpVSlRrR2JIQitXR3pqWGpCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRUy9nVThiR2VLNEFzSG9MaWl4b2dtRllTempsbXliSUNrT2JhcGUyUFBOblhkVHE0Z2YzbmRiQVdUVEx0UzN2enZFVzlSSDZYTEYrT1NjUGNJMFNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTY5MDA3MDQyNzY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg2NDAyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlxNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXE2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUNtaHUvUlhXdGFPTVBaQ1BCVHhUbGFXT0dNMmVHVUVxU2lNR2FyaW1jND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzkzMzc1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 

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
