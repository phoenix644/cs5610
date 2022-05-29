// const fs = require('fs');

// fs.writeFile("data.txt", "Hello there, hi",function(err){

//     if (err) throw err;
//     console.log("writing is done");

//     fs.readFile("data.txt","utf-8", (err, data) =>{

//         if (err) throw err;
//         console.log(data);
// });


// });


// const logger = require('./logger.js');

// logger.log;
// console.log(logger.version);


 const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));


const  path = ["/about", "/"];


app.get(path, function(req, res) {

   
res.send("<h1>test </h1>")
});

app.get("/tasks/:taskId", function(req, res) {

   console.log(req.params );
   res.send( `you are viewing taskid: ${req.params.taskId}!`)
    });

app.listen(port, function() {
console.log(`Example app listening on port ${port}!`)
});

// app.get(path, function(req, res) {

//     fs.readFile("index.html","utf-8", (err, data) =>{

//                 if (err) throw err;
//                 res.send(data)
               
//         });
// // res.send(html)
// });
// app.listen(port, function() {
// console.log(`Example app listening on port ${port}!`)
// });



const taskRouter