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
  if (!Reg.test(text)) throw `Formato errΓ³neo\n*${usedPrefix}register age.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Los nombres no pueden estar vacΓ­os (Alphanumeric) '
  if (!age) throw 'La edad no puede estar en blanco (Numbers)'
  age = parseInt(age)
  if (age > 40) throw 'Edad demasiado viejo π por favor muerto'
  if (age < 5) throw 'Los bebΓ©s pueden escribir segΓΊn el formato Κα΄ΙͺΚΚ ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let verif =`
Γ©xito en la verificaciΓ³n!!

β *_γ VerificaciΓ³n γ_*
β β *Nombre* : ${name}
β β *Edad* : ${age} AΓ±os de edad
β β *SN* : 
β ${sn}
β  ββββββββββββββ
β  ββββββββββββββ
β   Toxic Batrol  Β©2021
ββββββββββββββββββ
`.trim()
conn.sendFile(m.chat, pp, 'pp.jpg', verif, m, false)
}
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

