let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0])) throw '¡ya premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `ᴏɪ, @${who.split`@`[0]}. Ya eres miembro premium`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i
handler.rowner = true
handler.register = true
module.exports = handler
