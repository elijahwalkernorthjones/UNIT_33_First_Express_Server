const express = require('express');

const app = express();

//------------------------------------------


/** first requests using app.get, app.post, and res.send */

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

//------------------------------------------
const greetings = {
    en: "hello",
    fr: "bonjour",
    sp: "hola",
    js: "konichiwa",
    ru: "privet"
}

/** using req.params */
app.get("/greet/:language", function(req, res){
    const lang = req.params.language;
    const greeting = greetings[lang]
    res.send(greeting);
})

//------------------------------------------

/** using req.query to parse the query strings */
app.get('/search', function(req, res){
    const {term, sort} = req.query;
    return res.send(`SEARCH PAGE! term is ${term}, and sort is ${sort}`)
})

//------------------------------------------

/** using req.headers to get info on the headers of requests*/
app.get('/show-me-headers', function (req, res){
    return res.send(req.headers);
})




app.listen(3000, () => {
    console.log("Server running on port 3000")
});


