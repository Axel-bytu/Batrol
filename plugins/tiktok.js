let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Donde esta la ᴜʀʟ ʙʀᴏ?'
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.server_1 || json.info[0].videoUrl || ''
  if (!url) throw 'No se pudo recuperar la descarga'
  let txt = json.info[0].text
  for (let hashtag of json.info[0].hashtags) txt = txt.replace(hashtag, '*$&*')
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
▶ Puntos de vista : ${json.info[0].playCount} 
❤ Gustos :  ${json.info[0].diggCount} 
🔁 Cuota : ${json.info[0].shareCount} 
💬 Comentarios : ${json.info[0].commentCount} 
🎵 ${json.info[0].musicMeta.musicName} Por ${json.info[0].musicMeta.musicAuthor}
- *Por:* ${json.info[0].authorMeta.nickName} (${json.info[0].authorMeta.name})
- *Descripción:*
${txt}
  `.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler
