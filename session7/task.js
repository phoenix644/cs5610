const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("<h1>List of all the tasks </h1>");
});

router.get("/:taskId", function (req, res) {
  console.log(req.params);
  res.send(`You are viewing task ${req.params.taskId} `);
});

module.exports = router;


const { default: axios } = require("axios");

const response = await.axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);

const userResponse = await.axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.taskId}`);
