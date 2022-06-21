const express = require("express");
const {
  getNotes,
  CreateNote,
  getNoteById,
  DeleteNote,
  UpdateNote,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//we put this protect so user has to pass this protect to reach the getnotes api.
router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);
// //put is for update a note.

module.exports = router;
