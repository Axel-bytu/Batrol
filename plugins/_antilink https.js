let handler = m => m

let linkRegex = /https:/i
handler.before = function (m, { user, bot, groupMetadata }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('*Adiós👋, rompiste las reglas serás eliminado...!!*')
if (user.isAdmin || user.isSuperAdmin) return m.reply('*Uh te salvaste eres admin, no serás eliminado*')
    let participants = m.isGroup ? groupMetadata.participants : []
    let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}
    if (bot.isAdmin || bot.isSuperAdmin) {
        let linkGC = this.groupInviteCode(m.chat)
        let isLinkThisGc = new RegExp(linkGC, 'g')
        let isgclink = isLinkThisGc.exec(m.text)
        if (isgclink)
        conn.groupRemove(m.chat, [m.sender])
        
    } else m.reply('*El bot no es admin, no se puede exterminar a las personas*')
  }
  return true
}

module.exports = handler
