import express from 'express'
import { PORT, TOKEN } from './config.js'
import { Telegraf, session } from 'telegraf'

const app = express()
const bot = new Telegraf(TOKEN)

bot.use(session())

bot.start(ctx => {
  ctx.replyWithPhoto("https://cdn.dmcl.biz/media/image/301984/o/Imane+Khelif+of+Team+Algeria+competes+with+Liu+Yang+of+Team+People%27s+Republic+of+China.jpg",
                     {           
      caption: "Tap the trans until the trans taps you!",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'FIGHT!',
              url: 'https://t.me/TransClickerBot/TransClicker'
            }
          ]
        ]
      }
      })
    })

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))