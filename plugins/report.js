// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Por favor ingrese un informe'
    if (text.length > 300) throw '¡Lo siento, texto demasiado largo, máximo 300 textos!'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️️El problema se ha informado al propietario del robot, ¡no se responderán los informes falsos!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
