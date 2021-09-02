let PhoneNumber = require('awesome-phonenumber')
let os = require('os')
let util = require('util')
let handler = async (m, { conn }) => {
  let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let username = conn.getName(who)
  let github =`
    *Oi* \`\`\`${username}\`\`\`\n
   *_ɢɪᴛ ʜᴜʙ ʟɪsᴛᴀ:-_*
    
    \`\`\`📦ᴛᴏxɪᴄ ʙᴀᴛʀᴏʟ = https://github.com/Alien-Batrol\`\`\`
    
    \`\`\`📦ᴀxᴇʟ-ʙʏᴛᴜ = https://github.com/Axel-bytu\`\`\`
    `.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', github, m, false)
  }
}
handler.help = ['git']
handler.tags = ['tools']
handler.command = /^git$/i
module.exports = handler
