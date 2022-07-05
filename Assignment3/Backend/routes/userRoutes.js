const express = require("express");
const {
  registerUser,
  authUser,
  updateUserProfile,
  getUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);

router.route("/login").post(authUser);

//protect is for only authorized user can update the profile.
router.route("/profile").post(protect, updateUserProfile);

router.route("/newmember").get(getUsers);
module.exports = router;
