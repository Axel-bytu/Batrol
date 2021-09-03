const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Formato erróneo\n*${usedPrefix}register age.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Los nombres no pueden estar vacíos (Alphanumeric) '
  if (!age) throw 'La edad no puede estar en blanco (Numbers)'
  age = parseInt(age)
  if (age > 40) throw 'Edad demasiado viejo 😂 por favor muerto'
  if (age < 5) throw 'Los bebés pueden escribir según el formato ʙᴊɪʀʀ ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let verif =`
éxito en la verificación!!

┍ *_「 Verificación 」_*
│ ☞ *Nombre* : ${name}
│ ☞ *Edad* : ${age} Años de edad
│ ☞ *SN* : 
│ ${sn}
│  ▎▍▌▌▉▏▎▌▉▐▏▌▎▏
│  ▎▍▌▌▉▏▎▌▉▐▏▌▎▏
│   Toxic Batrol  ©2021
┕━━━━━━━━━━━━━━━━━
`.trim()
conn.sendFile(m.chat, pp, 'pp.jpg', verif, m, false)
}
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

