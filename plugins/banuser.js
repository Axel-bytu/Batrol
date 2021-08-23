let handler = async (m, { conn, text }) => {
    if (!text) throw '¿Quién quiere ser baneado?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta uno'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `prohibido con éxito`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
