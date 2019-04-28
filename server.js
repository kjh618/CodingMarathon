const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

const server = app.listen(8000, () => {
    console.log(`server is running at port 8000`);
});