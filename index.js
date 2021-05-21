const dotenv  = require('dotenv').config();
const { Client } = require("@notionhq/client");

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })

// list databases
const listDatabases = async () => {

    const rez = await notion.databases.list();
    console.log(rez);

}

const getVideos = async () => {

    const database_id = process.env.NOTION_DATABASE_ID

    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST',
      }

    const { results } = await notion.request(payload)

    const videos = results.map((page) => {
        console.log(page.properties.Description.rich_text[0].text.content);
    })
}


getVideos();
