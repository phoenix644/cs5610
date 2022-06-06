const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Note = require('./models/note');
const notesRouter = require('./routes/notes');
const methodOverride = require('method-override');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
  const notes = await Note.find().sort('-createdAt');
  res.render('index', { notes: notes });
});

mongoose.connect("mongodb+srv://admin:Xx123456@cs5610.cus0jqi.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', notesRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server Has Started`);
});
