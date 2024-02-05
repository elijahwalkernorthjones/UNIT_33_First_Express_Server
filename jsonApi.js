const express = require('express');

const app = express();

app.use(express.json()) // this is used if we want to enable the use of JSON


const CANDIES = [
    {name: 'snickers', qty: 43, price: 1.50},
    {name: 'skittles', qty: 26, price: .99}
]


app.get("/candies", function(req, res) {
    res.json(CANDIES);
})

app.post('/candies', function(req,res) {
    CANDIES.push(req.body);
    res.json(CANDIES);
})











app.listen(3000, () => {
    console.log("Server running on port 3000")
});