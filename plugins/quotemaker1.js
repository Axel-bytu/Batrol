let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text }) => {
let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 let [teks, wm] = text.split('|')
await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text, wm: conn.getName(m.sender) }, 'APIKEY'), 'nulis.jpg', '✨𝑩𝒂𝒕𝒓𝒐𝒍✨', m)
}
handler.help = ['q'].map(v => v + 'm *texto|nombre*')
handler.tags = ['tools']
handler.command = /^qm$/i
handler.owner = false
handler.mods = false
handler.group = true
handler.private = false
handler.premium = true
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = false

module.exports = handler
