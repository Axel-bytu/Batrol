let handler = function (m) {
  // this.sendContact(m.chat, '1 701 204-9405', 'Broz', m)
  this.sendContact(m.chat, '17012049405', 'Broz', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
