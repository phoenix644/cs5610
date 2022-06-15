/* eslint-disable no-unused-vars */


// fs.writeFile("file.txt", "Hello world 2", (err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         fs.readFile("file.txt",'utf8',(err, data)=>
//         {
//             if (err)
//             console.log(err);
//             else{
//                 console.log(data);
//             }
//         })
//     }
// })




// async function writeRead()
// {
//     await write("file.txt", "Hello world")
//     const data = await read("file.txt", "utf-8");
//     console.log(data);

// }
// writeRead();
// const fs = require('fs');
// const util = require('util');
// const readPromise = util.promisify(fs.readFile);
// const writePromise = util.promisify(fs.writeFile);
// writePromise("file.txt", "Hello world")
//     .then(() => {
//         return readPromise("file.txt", 'utf-8')
//     })
//     .then ((data) => console.log(data))
//     .catch((err) => console.log(err));

// async function writeReadAsync() {
//     try {
//         await writePromise("file.txt", "Hello world");
//         const data = await readPromise("file.txt", 'utf-8');
//         console.log(data);
//     }
//     catch (err)  {
//         console.log(err)
//     }
// }
// writeReadAsync();
// const logger = require("./logger.js");
// logger.log();
// console.log(logger.version)
// require('dotenv').config();
const dotenv = require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors())
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.set('views', './views');
app.set('view engine', 'pug');
const tasks = require('./routes/tasks.js');
app.use('/tasks', tasks);

// app.all('*', function (req, res, next) {
//     console.log("all called");
//     next();
// });


app.get('/', function (req, res) {
    res.send('Hello World!')
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
    const db = require('./db.js');
    db.connectToDB();
});

