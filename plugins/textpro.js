let fetch = require('node-fetch')
let split = '.'
if(!split) throw 'effect not found'
let handler = async (m, { conn, args: [effect], usedPrefix, text: txt }) => {
  let { effects } = await (await (fetch(global.API('xteam', '/textpro')))).json()
  if (!effect) throw '*Lista de Efectos*\n\n' + effects.sort((a, b) => a - b).join('\n')
  effect = effect.toLowerCase()
  if (!effect in effects) throw `Efecto *${effect}* no encontrado`
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
  if(!text) throw `Formato Incorrecto\n\nEjemplo:\n*${usedPrefix}neon sexy*\n*${usedPrefix}marvel toxic.batrol*`
  conn.fakeReply(m.chat, '*ESPERA ⏱️*', '0@s.whatsapp.net', '🔥𝑩𝒂𝒕𝒓𝒐𝒍🔥')
  await conn.sendFile(m.chat, url, 'textpro.jpg', `🔥𝑩𝒂𝒕𝒓𝒐𝒍🔥\n\n*Efecto:* ${effect}`, m)
  .catch(() => { conn.reply(m.chat, `_Error! Formato incorrecto o inténtalo más tarde_`, m) })
}
handler.help = ['textpro'].map(v => v + ' *(efecto)* *texto|texto2*')
handler.tags = ['tools']
handler.command = /^(textpro)$/i
handler.register = true
handler.group = true
handler.premium = false
handler.limit = true

module.exports = handler
