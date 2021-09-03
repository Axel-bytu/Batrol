let fetch = require('node-fetch')
//plugin by Cristian

let handler  = async (m, { conn, text }) => {
{m.reply('*ESPERA*⏳')}
//let text = args.join` `
if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
//if (text) return conn.reply(m.chat, '⌛ *EN PROCESO* ⌛', m)
let url = 'https://videfikri.com/api/textmaker/shadowtext/?text=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, '', '✨𝑩𝒂𝒕𝒓𝒐𝒍✨', m)

}
handler.help = ['sombra']
handler.tags = ['images']
handler.command = /^sombra?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
