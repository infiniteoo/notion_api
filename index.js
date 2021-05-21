const getVideos = require('./services/notion');

(async () => {
    const nVideos = await getVideos();
    console.log(nVideos);

})()



