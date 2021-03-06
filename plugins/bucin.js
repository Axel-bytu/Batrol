let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Elijo estar solo, no porque esté esperando al perfecto, sino porque necesito a alguien que nunca se rinda ..",
  "Se crea una sola persona con un socio que no ha encontrado ..",
  "soltero. Tal vez sea la forma de Dios de decir 'Descansa del falso amor' ..",
  "Los solteros son jóvenes que priorizan su desarrollo personal para un amor con más clase en el futuro ..",
  "No busco a alguien que sea perfecto, sino a alguien que se vuelva perfecto gracias a mi superioridad ..",
  "Los novios de la gente son nuestras almas gemelas pendientes ..",
  "Los solteros deben pasar. Todo tiene un tiempo, cuando toda soledad se convierte en unión con un amante halal. Ten paciencia ..",
  "Romeo estaba dispuesto a morir por Julieta, Jack murió por salvar a Rose. El caso es que, si quieres vivir, sé soltero ...",
  "Busco personas no por sus fortalezas pero busco personas por su sinceridad ..",
  "El mate no es un flip flop, que se intercambia con frecuencia. Así que sigue en la lucha correcta ..",
  "Si eres el guitarrista, no quiero ser el guitarrista. Porque no quiero dejarte ...",
  "Si amarte es una ilusión, déjame imaginar para siempre ..",
  "Cariño ... Mi trabajo es solo amarte, no luchar contra el destino ..",
"Cuando estoy contigo, parece que 1 hora es solo 1 segundo, pero cuando estoy lejos de ti, parece que 1 día se convierte en 1 año ...",
  "Los plátanos Kolak saben sumedang, aunque la distancia se extienda, mi amor nunca desaparecerá ...",
  "Quiero ser el único, no el único ..",
  "No puedo prometer ser bueno. Pero prometo estar siempre a tu lado ..",
  "Si me convierto en representante de la gente, definitivamente fracasaré, ¿cómo puedo pensar en la gente si lo único que tengo en mente eres tú?",
  "Mira mi jardín, lleno de flores. Mira tus ojos, mi corazón está floreciendo ..",
  "Prométeme estar conmigo ahora, mañana y siempre ...",
  "Desaparecer no solo surge por la distancia. Pero también por deseos que no se hacen realidad ..",
  "Nunca estarás lejos de mí, donde quiera que vaya tú siempre estás ahí, porque siempre estás en mi corazón, lo que está lejos son solo nuestros cuerpos, no nuestros corazones ..",
  "Sé en cada mirada que nos obstaculiza la distancia y el tiempo. Pero creo que luego definitivamente estaremos unidos ..",
  "Extrañarte sin siquiera conocerte es lo mismo que crear una canción que nunca se ha cantado...",
"There are times when distance is always a barrier between me and you, but still in my heart we are always close..",
  "If this heart is not able to stem all the longing, what can I do but pray for you..",
  "Maybe at this moment I can only hold back this longing. Until the time comes when I can meet and release this longing with you..",
  "Through the turbulent longing in my heart, there sometimes I really need your loving embrace..",
  "In the cold night, I don't remember anymore; How often I think of you miss you too..",
  "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain stops, I still miss you..",
  "Since getting to know you, I want to continue to learn, learn to be the best for you..",
  "Do you know the difference between a pencil and your face? If you can erase the writing pencil, but if your face nothing will be able to erase it from my mind..",
  "It's not the National Examination tomorrow that I have to worry about, but the life test I went through after you left me..",
  "One thing about happiness at school that keeps me motivated is being able to see your smile every day..",
  "Do you know the difference between going to school and going to your house? If you go to school, you must bring books and pens, but if you go to your house, I just bring my heart and love..",
  "I'm not sad if tomorrow is Monday, I'm sad if I don't meet you..",
  "My love moment is perpendicular to your love moment. Make our love a perfect equilibrium point..",
 "I am willing to take part in a running race around the world, as long as you are the finish line..",
  "My homework is to miss you. Stronger than Maths, broader than Physics, stronger than Biology..",
  "My love for you is like a metabolism, which will not stop until death..",
  "If the jelangkung is like you, come and pick me up, I'll take you home..",
  "Eat whatever I like as long as it's with you, including eating liver..",
  "Love is like a death sentence. If you don't get shot, you hang it..",
  "Loving you is like a drug: once you try to be addicted, you don't try to make yourself curious, leave it to make you addicted..",
  "I like snacking the most because snacking is delicious. Moreover, having you completely ....",
  "This world belongs only to the two of us. Everything else is just a contract..",
  "For me, all those days are Tuesdays. Tuesdays in Heaven when close to you....",
  "What if we both become a gang of criminals? I stole your heart and you stole mine..",
  "You are like the coffee I drank this morning. Bitter, but addictive..",
  "I'm often jealous of your lipstick. He can kiss you every day, from morning to night..",
  "Just hearing your name can make me smile like a fool..",
  "I know your girlfriend is not the only one, and like you not only me..",
  "Ever since I stopped wishing on you, I've become unmotivated in everything...",
  "With you, falling in love is the most intentional heartbreak..",
  "It's very difficult to feel the happiness of life without you by my side..",
  "Through the turbulent longing in my heart, there sometimes I really need your loving embrace..",
  "If you know, until now I still love you..",
  "Sometimes I'm jealous of kites...the strings just break, they're still being chased and don't want to be taken by other people....",
  "I didn't know what love was, until I finally met you. But, at that moment I knew how it felt to be heartbroken..",
  "Chasing is tiring, but even more tired waiting\nWaiting for you to notice my existence....",
"Don't stop loving just because you've been hurt. Because there's no rainbow without rain, there's no true love without tears..",
  "I have a million reasons to forget you, but nothing can force me to stop loving you..",
  "Sometimes one feels so stupid just to love someone..",
  "You are the best heartbreak I've never regretted..",
  "It's not that it's not worth the wait, it's just that it often gives false hope..",
  "Part of me hurts, Remembering her so close, yet untouchable..",
  "The best thing about loving someone is secretly praying for them.",
  "I wish I could get rid of this feeling as soon as I lost you..",
  "For the sake of love we deceive ourselves. Trying to be strong turns out to be dishonorable..",
  "Think of me as your home, if you go you know where to go home. Stay if you want and leave if you are bored....",
  "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him?\n\nIf I'm not disappointed, but I'm waiting for his words..",
  "My longing is like a twig that remains standing. Even though there are no more leaves to accompany it, until it finally dries up, breaks, and dies..",
  "I guess we're just two strangers now having the same memories..",
  "Make me hate you even if it's only for a few minutes, so it's not too hard to forget you..",
  "I love you with all my heart, but you share your feelings with other people..",
  "Loving you might break me, but somehow leaving you doesn't fix me..",
  "You are first and foremost in my life. But, I am second to you..",
  "If we can only meet in a dream, I want to sleep forever..",
  "Seeing you happy is my happiness, even though your happy without me..",
  "I sometimes envy an object. It has no taste but is always needed. Unlike me, who has taste, but is abandoned and ignored....",
  "How can I move if only you my heart stops?.",
  "Memories of you are like home to me. So every time my mind wanders, it will always come back to you..",
  "Why is tissue useful? Because love never runs dry. - Sujiwo Tejo.",
  "If loving you is a mistake, fine, let me just keep being wrong..",
  "Ever since I met you, I want to keep learning. Learn to be the best for you..",
  "Some people act stupid just to see you smile. And he's happy about that..",
  "I'm not a good person, but will learn to be the best for you..",
  "We don't die, but it's the wounds that make us unable to walk like we used to..",
  "Your presence is like a cup of coffee that I need every morning, which can encourage me to stay excited about the day..",
  "I really want to give the world to you. But since that's not possible, then I will give you the most important thing in my life, which is my world..",
  "It's better to sing humorously but sweetly, rather than pretentious romantic but tragic ending..",
  "Ben doesn't end up being disappointed, you have to know when to hope and when to stop..",
"I, too soggiest zinc do not know the meaning of 'I Love U'. But I only Bertine 'I love you'.",
  "You don't need to be beautiful and rich, I'm pretty sure you're happy..",
  "My love for you is like a camera, the focus on you is like I'm blurring.",
  "Every day I dream but I can't have it.",
  "Not seeing you for 30 days feels like a month..",
  "I'm without you like a sego cat lost its rubber. Ambyar..",
  "I wish I could play time. So that I can find you more quickly. Ben More time I have to live with you..",
  "I never knew what it was like to love, except once I met you..",
  "Aa's love to visit will not be lost even if aa is married again..",
  "My patience is limited, but my love for you is endless..",
  "Kanyaah will not fade even with Bayclean..",
  "Amazing memories of being together with you ek then remembered until forgotten..",
  "I will not be able to live on my own, I need the help of other people..",
  "Putting aa to the neg is like a banker to collect debts (let's go)..",
  "Our patience is limited, but our love for you will never end..",
  "Want to feel I compile all the words of love that are in this world, and then going by me to collect, so that you know my immense sense of love to you..",
  "Calm down, my love is like a krispatih song; time will not run out..",
  "I'm not the perfect person for you, nor the best for you. But for sure, I'm the only person who continues to remember you..",
  "It's enough that the network is lost, you don't..",
  "It's often made to eat liver. But realizing you're still here makes you happy again..",
  "My enemies are those who want to have you too..",
  "There are always a lot, but if it's just you I want, what?.",
  "My sleep hours were ruined by longing..",
  "It's enough that China is far away, our love is not..",
  "The important thing is your happiness, I'm not important ....",
  "Just one wish, loved by you ....",
  "I'm without you like an ambulance without a sound..",
  "It's enough that Antarctica is far away. Between us.",
]
