let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Batrol bot activo en chat!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true

module.exports = handler
