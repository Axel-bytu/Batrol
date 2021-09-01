let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw '¡Responder mensajes!'
    if (!text) throw `use *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' registrado en esta lista de mensajes`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`mensaje enviado con éxito en el mensaje como '${text}'
    
acceso con ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler
