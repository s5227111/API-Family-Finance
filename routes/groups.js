const express = require("express");
const router = express.Router();

const {
  getGroups,
  createGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require("../controllers/group.controller");

router.get("/", getGroups);
router.get("/find/:id", getGroupById);
router.get("/create", createGroup);
router.get("/update/:id", updateGroup);
router.get("/delete/:id", deleteGroup);

module.exports = router;
