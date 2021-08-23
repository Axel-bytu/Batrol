let handler = m => m
handler.before = async function (m) {
  if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
  let id = m.chat
  if (!m.quoted || m.quoted.sender != this.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) return !0
  this.math = this.math ? this.math : {}
  if (!(id in this.math)) return m.reply('El asunto ha terminado')
  if (m.quoted.id == this.math[id][0].id) {
    let math = JSON.parse(JSON.stringify(this.math[id][1]))
    if (m.text == math.result) {
      global.db.data.users[m.sender].exp += math.bonus
      clearTimeout(this.math[id][3])
      delete this.math[id]
      m.reply(`*¡Respuesta correcta!*\n+${math.bonus} XP`)
    } else {
      if (--this.math[id][2] == 0) {
        clearTimeout(this.math[id][3])
        delete this.math[id]
        m.reply(`*¡Se acabó la oportunidad!*\nRespuestas: *${math.result}*`)
      } else m.reply(`*¡Respuesta incorrecta!*\nAún disponible ${this.math[id][2]} oportunidad`)
    }
  }
  return !0
}

module.exports = handler
