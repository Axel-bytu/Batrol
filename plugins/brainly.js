const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw '¿porque?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*pregunta ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*respuesta ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
