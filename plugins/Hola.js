let handler = m => m.reply('*Hola👋 soy 𝑩𝒂𝒕𝒓𝒐𝒍 𝒃𝒐𝒕 😊 Asistente de Axel🌀??* , *En que te puedo ayudar¿?*_Escribe_ *#help* o *#Menú* _para que puedas ver mis funciones_ .*')

handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
