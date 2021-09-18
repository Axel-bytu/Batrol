let handler = m => m.reply('*Hola👋*😊, *estos son mis comandos de instalación🙂\n\n$apt update && apt upgrade\n\n$pkg install git -y\n\n$pkg install nodejs -y\n\n$pkg install ffmpeg -y\n\n$pkg install imagemagick -y\n\n$git clone https://github.com/Axel-bytu/Batrol\n\n$cd Batrol\n\n$npm install\n\n$npm start\n\nListo luego escaneas el código en whatsapp wed de el número aser bot*')

handler.customPrefix = /^(Install)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
