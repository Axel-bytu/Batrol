let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.DATABASE._data.chats[m.chat].sWelcome = text
    m.reply('Bienvenida establecida con éxito\n@ᴜsᴇʀ (Mention)\n@tema (Group Title)\n@descripción (Group Description)')
  } else throw '¿donde esta el texto?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

