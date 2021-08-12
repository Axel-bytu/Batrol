let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw`_ *¡No hubo ausencias en este grupo!* _\n\n * ${usedPrefix} comenzar ausente* - comenzar ausente`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*¡Estás ausente!*'
    absen.push(m.sender)
    m.reply(`¡Lísto!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 AUSENTE 」*

Fecha: ${date}
${conn.absen[id][2]}

┌ *Los que han estado ausentes:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_by Dragon loop__`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler
