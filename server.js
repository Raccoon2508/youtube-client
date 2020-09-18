const express = require('express');
const app = express();


app.use(express.static(`./dist/youtube-client`));
app.get(`/*`, function (req, res) {
    res.sendFile(`index.html`, { root: `./dist/youtube-client` })
});
app.listen(process.env.PORT || 8080);