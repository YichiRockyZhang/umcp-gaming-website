const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const games = JSON.parse(fs.readFileSync('games.json'));
var port = process.env.PORT || 3000;

console.log(games);

app.use(express.static(path.join(__dirname, '/')));
app.set('view engine', 'ejs');

app.get('/',function(req, res) {
    res.render('index.html')
});

app.get('/:game', function(req, res) {
    if(games[req.params.game])
        res.render('game.ejs', {page: games[req.params.game]});
    else
        res.render('fail.ejs');
})

app.listen(port, function() {
    console.log('listening on 8080...');
});