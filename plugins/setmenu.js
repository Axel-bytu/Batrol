let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menú configurado correctamente\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Reinicio del menú', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' establecido con éxito\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' Reiniciar', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefijo)
%exp (Exp actual)
$maxexp (Exp para subir de nivel)
%totalexp (Total Exp)
%xp4levelup (Se necesita experiencia para subir de nivel)
%limit (Límite)
%name (Nombre)
%weton (Weton hoy)
%week (Día)
%date (Fecha)
%time (Hira)
%uptime (Tiempo de actividad de bot)
%rtotalreg (Número de usuarios registrados en la base de datos)
%totalreg (Número de usuarios en la base de datos)
%npmname
%npmdesc
%version
%github

Bagian Menu Header & Footer:
%category (Kategoria)

Bagian Menu Body:
%cmd (Command)
%islimit (Si el comando es limitado)
`.trim()
