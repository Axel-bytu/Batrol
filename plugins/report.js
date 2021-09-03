// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Please enter a report'
    if (text.length > 300) throw 'text too larg!!!'
    const laporan = `*「 REPORTE 」*\nNúmero : wa.me/${m.sender.split`@`[0]}\nMessage : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '919567997462@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️El problema se ha informado al propietario del bot, ¡no se responderá a los informes falsos!')
}
handler.help = ['bug', 'report'].map(v => v + ' <report>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
