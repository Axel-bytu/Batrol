let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_ *¡Todavía hay ausencias en este chat!* _\n\n *${usedPrefix}hapusabsen* -para eliminar las ausencias`
    }
    conn.absen[id] = [
        m.reply(`¡Comienzo exitoso ausente!\n\n*${usedPrefix}absen* - estar ausente\n*${usedPrefix}cekabsen* - para comprobar la asistencia\n*${usedPrefix}hapusabsen* - para borrar los datos de asistencia`),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
