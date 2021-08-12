let handler = async(m, { usedPrefix }) => {
     let id = m.chat
     conn.absent = conn.absent ? conn.absent : {}
     if (!(id in conn.absen)) throw `_*No hubo ausencia en este grupo!*_\n\n*${usedPrefix}start absent* - to start absent`
     delete conn.absen[id]
     m.reply(`¡listo!`)
}
handler.help = ['remove absent']
handler.tags = ['absent']
handler.command = /^(delete|delete)absent$/i
handler.group = true
handler.admin = true
module.exports = handler
