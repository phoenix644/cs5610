const express = require('express');
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
const dotenv = require('dotenv').config();
app.use(express.static(__dirname + '/public'));
app.use(cors());

const db = require('./db.js');
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');
const tasks = require('./routes/tasks.js');
app.use('/tasks/', tasks);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        console.log("auth")
      res.status(401).json({message:'invalid token...'});
    }
  });
app.listen(port, async function () {
    try { await db.connectToDB(); }
    catch (err) {
        console.log(errÎ)
    }

    console.log(`Example app listening on port ${port}!`)
});

