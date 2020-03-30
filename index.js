import express from 'express'
import fetch from 'node-fetch'

require('dotenv').config()
const CronJob = require('cron').CronJob
const PORT = process.env.PORT || 3000
const DISCORD_URL = process.env.DISCORD_URL || null
const MEET_URL = process.env.MEET_URL || null
const app = express()

const message =  {
    "title": "title ~~(did you know you can have markdown here too?)~~",
    "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
    "url": "https://discordapp.com",
    "color": 11117314,
    "timestamp": "2020-03-28T21:45:28.070Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
      "text": "footer text"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "author": {
      "name": "author name",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
      {
        "name": "🤔",
        "value": "some of these properties have certain limits..."
      },
      {
        "name": "😱",
        "value": "try exceeding some of them!"
      },
      {
        "name": "🙄",
        "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "these last two",
        "inline": true
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "are inline fields",
        "inline": true
      }
    ]
  }

const getData = async url => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      const newData = await {...json}
      const postData = JSON.stringify({
        "username": "Let's MEET_UP",
        "content": `Hello ${newData.topic}`,
        "embeds": [message]
      })
      fetch(DISCORD_URL, { method: 'POST', headers: headers, body: postData})
    } catch (error) {
      console.log(error)
    }
  }
getData(MEET_URL)


const headers = {
  "Content-Type": "application/json"
}

// const coSekunde = new CronJob('*/2 * * * * *', Discord)
// coSekunde.start();

app.listen(PORT, () => {
    console.log(`App listens on port ${PORT}`)
})