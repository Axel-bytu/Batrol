let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('¡El enlace de grupo se restableció correctamente!\n\nNuevo enlace:\nhttps://chat.whatsapp.com/' + res.code)
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^re(voke|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
