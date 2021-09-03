let handler = function (m) {
  if (!m.quoted) throw 'Etiqueta un mensaje del bot!'
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Solo puedo borrar mensajes míos'
  if (!isBaileys) throw 'El mensaje no es enviado por un bot!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
