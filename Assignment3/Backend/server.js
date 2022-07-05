const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const userRoutes = require("./routes/userRoutes.js");
const noteRoutes = require("./routes/noteRoutes.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded());

dotenv.config();
connectDB();
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send("API is running...");
});
// app.get("*", (req, res) =>
//   res.sendFile(path.resolve(__dirname + "/public", "index.html"))
// );
//heroku

// __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

//heroku

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.json(note);
// });

// app.post("/api/users", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });
app.use("/api/users", userRoutes);
// app.get("*", (req, res) =>
//   res.sendFile(path.resolve(__dirname + "/public", "index.html"))
// );
app.use("/api/notes", noteRoutes);
// app.get("*", (req, res) =>
//   res.sendFile(path.resolve(__dirname + "/public", "index.html"))
// );
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`));
