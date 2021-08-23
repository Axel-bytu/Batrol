async function handler(m) {
    if (!m.quoted) throw 'responder mensajes!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw '¡el mensaje al que está respondiendo no contiene una respuesta!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
module.exports = handler