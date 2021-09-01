let handler = async(m, { usedPrefix, text }) => {
     conn.absent = conn.absent ? conn.absent : {}
     let id = m.chat
     if (id in conn.absen) {
         throw `_*¡Todavía hay ausencias en este chat!*_\n\n*${usedPrefix}remove absent* - para borrar ausencias`
     }
     conn.absent[id] = [
         m.reply(`¡Inicio exitoso de la hoja de horas!\n\n*${usedPrefix}absent* - por ausente\n*${usedPrefix}checkable* - para comprobar la asistencia\n*${usedPrefix}remove absent* - para borrar los datos de asistencia `),
         [],
         text
     ]
}
handler.help = ['startabsen [text]']
handler.tags = ['absent']
handler.command = /^(start|start)absent$/i
handler.group = true
handler.admin = true
module.exports = handler
