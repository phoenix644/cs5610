
const express = require('express');
const router = express.Router();
const { saveToDB, readFromDB, readAll, deleteFromDB } = require('../db.js');
const path = require('path');
const {checkJWT} = require('../checkJWT.js')

router.get('/',async function (req, res) {
    try {
        const data = await (await readAll()).toArray();
        res.json(data)
    }
    catch (err) { console.log(err) }
});

// router.get('/newuser', async function (req, res) {
//     res.sendFile(path.join(__dirname, '../public', 'users.html'));
// });
// router.get('/:id', async function (req, res) {
//     // res.send(`welcome ${req.params.name}`);
//     try {
//         const data = await readFromDB({});
//          res.render("../views/user.pug", { name: data.name })
//     }
//     catch (err) { console.log(err) }
// });

router.post('/', async function (req, res) {
    const user = req.body;
     try {
    const data = await saveToDB(user);
        // res.send('Data received ' + JSON.stringify(req.body))
        res.json(data)

    }
    catch (err) {
        console.log(err)
    }
});

router.delete('/:id',checkJWT, async function (req, res) {
     try {
        const data = await deleteFromDB(req.params.id);
        // res.send('Data received ' + JSON.stringify(req.body))
        // res.redirect('/tasks');
        res.json(data)

    }
    catch (err) {
        console.log(err)
    }
});

module.exports = router;

 