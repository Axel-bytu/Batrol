let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_¡Todavía hay votos en este chat!_\n\n*${usedPrefix}hapusvote* - para eliminar voto`
    }
    m.reply(`¡Comienza la votación!\n\n*${usedPrefix}upvote* - con seguridad\n*${usedPrefix}devote* - por no\n*${usedPrefix}cekvote* - por comprobar voto\n*${usedPrefix}hapusvote* - para eliminar votos`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
