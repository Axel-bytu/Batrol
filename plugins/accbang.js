let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'nope'
   if (isAdmin) throw `Aunque ya seas administrador`
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
