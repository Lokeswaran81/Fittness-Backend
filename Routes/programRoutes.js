const express = require("express");
const router = express.Router();

const {protect} = require("../middleware/authMiddleware");
const {
  getPrograms,
  savePrograms,
} = require("../controllers/programController");

router.get("/", protect, getPrograms);
router.post("/", protect, savePrograms);

module.exports = router;
