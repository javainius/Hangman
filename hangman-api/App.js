const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


//Import Routes
const postsRoute = require('./routes/word');

app.use('/', postsRoute);

//How to ew start listemomg to the server
app.listen(3000);