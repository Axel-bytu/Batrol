let handler = m => m.reply('*Hola👋*😊, *estos son mis comandos de instalación🙂

$apt update && apt upgrade

$pkg install git -y

$pkg install nodejs -y

$pkg install ffmpeg -y

$pkg install imagemagick -y

$git clone https://github.com/Axel-bytu/Batrol

$cd Batrol

$npm install

$npm start
Listo luego escaneas el código en whatsapp wed de el número aser bot*')

handler.customPrefix = /crear/i
handler.command = new RegExp
handler.private = false
handler.group = true
handler.owner = true

module.exports = handler
