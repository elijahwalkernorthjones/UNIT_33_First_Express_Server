const express = require('express');

const app = express();

app.use(express.json()) // this is used if we want to enable the use of JSON


/** teensy database */

const CANDIES = [
    {name: 'snickers', qty: 43, price: 1.50},
    {name: 'skittles', qty: 26, price: .99}
]


/** middleware & routes */

app.get("/candies", function(req, res) {
    res.json(CANDIES);
})

app.post('/candies', function(req,res) {
    CANDIES.push(req.body);
    res.status(201).json(CANDIES); // status 201 becuase something is being created
})










/** app.listen */
app.listen(3000, () => {
    console.log("Server running on port 3000")
});