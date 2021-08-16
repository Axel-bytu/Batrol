let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Responder Pesan!'
    if (!text) throw `utilizar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `'${text}' registrado en la lista de mensajes`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mensaje agregado exitosamente en la lista de mensajes como '${text}'
    
Accede con ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker|gif)$/

module.exports = handler
