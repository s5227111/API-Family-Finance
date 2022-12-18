const express = require("express");
const {
  login,
  register,
  getUsers,
  update,
  deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/login", login);
router.get("/register", register);
router.get("/update/:id", update);
router.get("/delete/:id", deleteUser);

module.exports = router;
