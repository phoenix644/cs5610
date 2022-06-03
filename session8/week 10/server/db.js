const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv').config();
const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true });
module.exports = {
    connectToDB: async function connectToDB() {
        try {
            await client.connect();
            console.log("connected to DB");
        }
        catch (err) {
            console.log(err)
        }
    },
    saveToDB: async function saveToDB(newUser) {
        try {
            const result = await client.db('cs5610').collection('tasks').insertOne(newUser);
         }
        catch (err) { console.log(err) }
    },
    readFromDB: async function readFromDB(filter) {
        try {
            const result = await client.db("cs5610").collection("tasks").findOne(filter);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },
    readAll: async function readAll() {
        try {
            const result = await client.db("cs5610").collection("tasks").find().sort({name:1});
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteFromDB: async function deleteFromDB(id) {
         try {
            const result = await client.db("cs5610").collection("tasks").deleteOne({_id:ObjectId(id)});
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
}
