const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "79149958622";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_36_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtWHRCVzB2ck16Wnpxc3M1MUgrVncrM1o0SWtZM3JLbWtwQndvMWNhN0tRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODgyODc1MjE5NTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNzk2Mzg3MERDMjJENEI3M0I0Njc5NUNDMDA1NTBERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1MjUzNTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg4Mjg3NTIxOTU1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUJDRjRFOTA4NzFBNjE1QzRDNDBCREM1RUQ1MDhFNUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NTI1MzU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4ODI4NzUyMTk1NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBNTg4MzEyRjg5Q0FFNEQ0RDkxOTkyODAxOTBBQkExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDUyNTM1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2elNfemxTY1NiQ1RoY1MtcTRXeW53XCIsXG4gIFwicGhvbmVJZFwiOiBcImMyM2FjMWZlLWI4OGEtNDZjMS04ZWU0LTdkYzBhZWU0YjM3NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAyLFxuICAgICAgMTIwLFxuICAgICAgOTMsXG4gICAgICAxMSxcbiAgICAgIDE3OSxcbiAgICAgIDIwMyxcbiAgICAgIDE1MSxcbiAgICAgIDEzOCxcbiAgICAgIDM0LFxuICAgICAgMTgyLFxuICAgICAgMjE3LFxuICAgICAgMTI2LFxuICAgICAgMTE3LFxuICAgICAgMzAsXG4gICAgICA5NyxcbiAgICAgIDQ5LFxuICAgICAgMTE3LFxuICAgICAgMjA5LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAyMTMsXG4gICAgICAxMDksXG4gICAgICAxNzMsXG4gICAgICAyMTgsXG4gICAgICAyNDgsXG4gICAgICA1MSxcbiAgICAgIDE2NCxcbiAgICAgIDEyMSxcbiAgICAgIDIyNyxcbiAgICAgIDI0NixcbiAgICAgIDUwLFxuICAgICAgMTYxLFxuICAgICAgMTE3LFxuICAgICAgMjI0LFxuICAgICAgNTEsXG4gICAgICA1MCxcbiAgICAgIDUxLFxuICAgICAgMTM2LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLT1dzdlFGRUthRGk3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRFOXBjd0ZPQVZoUG1mTDI3OHo3VWRDZDJNcUdmTDMvMWVlaFVvTk5nM289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVG04RnlPcEQ5VFZYZzNrNjRXUVhwYm4xclBjQzBCUTEvYjN1dERvb2JSTmh5Q1U4U203RVhKczg4SkVQSUF6VjJTMFlpU2UwRjFZV3RDVjdyZW5nQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMlhKUm0wKzc3cDlJVE5QaXlKVlcwYkVDSks2Y294NmxLaFpOQkN0eWhLNUI2NE1KbTdvYWZKd21RUWk0Y1UvblZ3WjJhcStGaXEralBWcE13Q3FVQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2Mjg4Mjg3NTIxOTU1MDo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzU5MzExMTI3MTQyOTc6NzFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWdyZWUgdG8gRmFpbCA/Pz8/Pz8/Pz8/XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2Mjg4Mjg3NTIxOTU1MDo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1MjUzNTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCUXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJRdi5qc29uIjogIntcImtleURhdGFcIjpcInJpOWVWb0JGSkg3TThRNkJRRlQwWVgrdXhUNkFEbUVldEcxb2N2VE5MVmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NjI2ODk2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTI1MzU0MTg3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
