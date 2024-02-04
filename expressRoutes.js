const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("home page")
})

app.get('/dogs', function(req, res) {
    console.log("dogssssss")
    res.send("WOOOOOOF!!!")
})

app.get('/cats', function(req, res) {
    console.log("dogssssss")
    res.send("MEOWMEOWMEOWWWWW!!!")
})

app.get('/chickens', function(req, res){
    res.send('BOK BOK (get request')
})

app.post('/chickens', function createChicken(req, res){
    res.send('we made chikky (post request)')
})


const greetings = {
    en: "hello",
    fr: "bonjour",
    sp: "hola",
    js: "konichiwa",
    ru: "privet"
}






app.listen(3000, () => {
    console.log("Server running on port 3000")
});