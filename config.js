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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_30_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFZvQkd0emswcXFUVFdPR3pPL001b1VJM0VjTnNaVTZrWktUZTRPVGZJZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4OTk1ODIyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTQyMDJDMDhGN0JBOUExM0YyQkVCNDA2NzdCMjU4RjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTM1ODI4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRZQnVXV1ZQUnppbEQ4SmZPVnRlR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDA0NGFkYWMtYTI1Ni00MTM1LWE3ZDgtMmU5ZDMxODJmNWIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjAzLFxuICAgICAgMTczLFxuICAgICAgMzgsXG4gICAgICAyNTUsXG4gICAgICAxNzMsXG4gICAgICA4NyxcbiAgICAgIDcsXG4gICAgICAyNDQsXG4gICAgICAyMjUsXG4gICAgICAxMSxcbiAgICAgIDExNCxcbiAgICAgIDIyMCxcbiAgICAgIDIxNixcbiAgICAgIDg0LFxuICAgICAgMjIwLFxuICAgICAgMTQ0LFxuICAgICAgNDgsXG4gICAgICAyMDksXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDE4MyxcbiAgICAgIDI0NixcbiAgICAgIDE3NSxcbiAgICAgIDEwNCxcbiAgICAgIDgxLFxuICAgICAgMjM0LFxuICAgICAgMjEwLFxuICAgICAgNjcsXG4gICAgICAyNTQsXG4gICAgICAxMjcsXG4gICAgICAxOTYsXG4gICAgICAxNTUsXG4gICAgICAxMTQsXG4gICAgICAyMixcbiAgICAgIDE1OSxcbiAgICAgIDE5MCxcbiAgICAgIDIzNSxcbiAgICAgIDg2LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxYMTU4NDVKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4OTk1ODIyNTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkTNn0XNn1jNn1TNn0XNn1LNn1wiLFxuICAgIFwibGlkXCI6IFwiMjYxMzQ5MTc5NDEyNTgyOjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEOTVPTURFSXZobkxRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWJSbDlnMjkyU2tnMXJGSVhZcWk4b0l1U2s3ZFRXcHFpNU04V05EQzNXZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLM1d4cHlzSkEyaXlEWTJrUWRMS2w5aldmOUZxanZxYUVxakphRDBBWHN3V1hQS3BuMmpkcHZPTDlwUytqWllMalNOUWJaZVFSSEVoOXI5cjhvWEZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBM09MNHBucEliUXJSMUlXV2t6UU9yQ3VnNmh0bnpyT3ZQd0YxQ0hBcTYrbG8ya1JWUlQ4bG1wSGljOG43dTFiZ24zTXhCNFNpV2QzRW9rT0N1YytEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTk1ODIyNTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMzU4MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLeWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt5ZS5qc29uIjogIntcImtleURhdGFcIjpcIjR1Y21XczhRZGY5WHczL0NXb0lsZkRrQU5ub2M0S0ZIdmdNZFNkNVk1OTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNDU3ODg2MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
