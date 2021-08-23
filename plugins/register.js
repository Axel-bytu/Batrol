const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Ya estás registrado\n¿Quieres volver a registrarte? ${usedPrefix}unreg <SN|NÚMERO DE SERIE>`
  if (!Reg.test(text)) throw `Formato incorrecto\n*${usedPrefix}daftar nombre.edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (alfanumérico)'
  if (!age) throw 'La edad no puede estar vacía (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Edad demasiado vieja 😂'
  if (age < 5) throw 'El bebé puede escribir según formato bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
¡Registro exitoso!

╭─「 Info 」
│ nombre: ${name}
│ Edad: ${age} tahun
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

