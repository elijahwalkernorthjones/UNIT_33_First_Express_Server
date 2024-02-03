const express = require('express');

const app = express();


app.get('/dogs', () => {
    console.log("dogssssss")
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
});