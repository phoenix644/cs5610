
const express = require('express');
const router = express.Router();
const { saveToDB, readFromDB, readAll, deleteOne } = require('../db.js');
const path = require('path');

const db = require('../db.js');
const { ObjectId } = require('mongodb');


router.get('/', async function (req, res) {

    try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        const data = await readAll();
        res.json(await data.toArray());
    }
    catch (err) {
        console.log("err ", err)
    }

    // try {
    // const data = await (await readAll()).toArray();
    //  res.json(data)
    // }
    // catch (err) { console.log(err) }
});

router.get('/newtask', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'newtask.html'));
});

router.get('/:taskId', async function (req, res) {
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
    // const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
    const data = await readFromDB({_id: ObjectId(req.params.taskId)});
    res.json(data);

    // res.render("../views/task.pug", { id: req.params.taskId, title: data.title, date:data.date })


    // res.send(`You are viewing task ${req.params.taskId}`);
    // try {
    //     const data = await readFromDB({});
    // res.render("../views/task.pug", { id: req.params.taskId })
    // }
    // catch (err) { console.log(err) }
});

router.delete('/:taskId', async function (req, res) {
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
    // const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
    const data = await deleteOne({_id: ObjectId(req.params.taskId)});
    res.json(data);

    // res.render("../views/task.pug", { id: req.params.taskId, title: data.title, date:data.date })


    // res.send(`You are viewing task ${req.params.taskId}`);
    // try {
    //     const data = await readFromDB({});
    // res.render("../views/task.pug", { id: req.params.taskId })
    // }
    // catch (err) { console.log(err) }
});


router.post('/', async function (req, res) {
    const user = req.body;
    // console.log(req.body)
    try {
       const data = await saveToDB(user);
       res.json(data)
        // res.send('Data received ' + JSON.stringify(req.body))
        // res.redirect('/tasks');
    }
    catch (err) {
        console.log(err)
    }
});

module.exports = router;

