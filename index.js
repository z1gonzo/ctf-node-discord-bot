import express from 'express'
import fetch from 'node-fetch'

require('dotenv').config()
const CronJob = require('cron').CronJob
const PORT = process.env.PORT || 3000
const DISCORD_URL = process.env.DISCORD_URL || null
const MEET_URL = process.env.MEET_URL || null
const HANGOUT_URL = process.env.HANGOUT_URL || 'https://google.com'
const app = express()

function getData(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res
    })
}
const postData = url => (res) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const postData = {
      username: "Let's MEET_UP",
      content: `@here`,
      embeds: [{
        "title": `:clock930: Spotkanie ${getProperDate(res.date)}`,
        "description": `Zapraszamy na [hangouts](${HANGOUT_URL})`,
        "color": 7924000,    
        "fields": [
          {
            "name": ":loudspeaker: TEMAT",
            "value": `${res.topic}`
          },
          {
            "name": ":martial_arts_uniform: PROWADZĄCY ",
            "value": `${res.leader}`
          },
          {
            "name": ":arrow_forward: LINK DO SPOTKANIA",
            "value": `[HANGOUTS](${HANGOUT_URL})`
          }
        ]
      }]
    };
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(postData)
    })
  } catch(error) {
    console.log(error);
  }
}
function getProperDate(timestamp) {
  const date = new Date(timestamp).toISOString().slice(0, 19).replace('T', ' ')
  return date
}

async function sendToDiscord() {
  getData(MEET_URL).then(postData(DISCORD_URL))
}


sendToDiscord();

// const coSekunde = new CronJob('*/5 * * * * *', sendToDiscord)
// coSekunde.start();

app.listen(PORT, () => {
    console.log(`App listens on port ${PORT}`)
})