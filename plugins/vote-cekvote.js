let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No hay votaciones en este grupo!*_\n\n*${usedPrefix}sᴛᴀʀᴛɪᴠᴏᴛᴇ* - para empezar a votar`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*_「 VOTAR 」_*

*razón:* ${reason}

*UPVOTE*
_total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
_total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}}

*${usedPrefix}hapusvote* - para eliminar votos

_by broz_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
