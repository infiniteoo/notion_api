const express = require('express');
const PORT = process.env.PORT || 5000;

const getVideos = require('./services/notion');


const app = express();

app.get('/videos', async (req, res) => {
    const videos = await getVideos();
    res.json(videos);
})

app.listen(PORT, console.log(`Server started on port ${PORT}`));





