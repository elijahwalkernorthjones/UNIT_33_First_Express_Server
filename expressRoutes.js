const express = require('express');

const app = express();


app.get('/dogs', function(req, res) {
    console.log("dogssssss")
    console.log(req)
    res.send("WOOOOOOF!!!")
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
});