let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
   if (!(id in conn.absen)) throw `_*¡No hubo ausencias en este grupo!*_\n\n*${usedPrefix}mulaiabsen absent* - empezar ausente`

     let d = new Date
     let date = d.toLocaleDateString('id', {
         day: 'numeric',
         months: 'long',
         year: 'numeric'
     })
     let absent = conn.absen[id][1]
     let list = absent.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
     conn.reply(m.chat, `*「 ABSENT *

Date: ${date}
${conn.absent[id][2]}

*Los que han estado ausentes:*
│
Total: ${absent.length}
${list}
│
└────
_by Dragon Loop_`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
module.exports = handler
