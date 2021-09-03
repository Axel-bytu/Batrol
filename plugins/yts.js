let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw '¿qué estás buscando?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duración: ${v.timestamp}
Subido: ${v.ago}
${v.views} ᴠɪᴇᴡs
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) suscriptores_
${v.videoCount} vɪᴅᴇᴏ
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <search>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler
