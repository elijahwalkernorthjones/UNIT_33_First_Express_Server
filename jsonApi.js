const express = require('express');

const app = express();

app.use(express.json()) // this is used if we want to enable the use of JSON
app.use(express.urlencoded({encoded: true})); // if we want to enable form data


