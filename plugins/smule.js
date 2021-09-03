let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...¿dónde está la URL?'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00s$/i

module.exports = handler
