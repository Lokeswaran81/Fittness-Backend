// const express = require("express");
// const { getHomeContent,updateHomeContent } = require("../Controllers/homeContentController");


// const router = express.Router();

// router.get("/", getHomeContent);
// router.put("/", updateHomeContent);

// module.exports = router;




const express = require("express");
const {
  getHomeContent,
  updateHomeContent,
} = require("../Controllers/homeContentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// PUBLIC (anyone can view)
router.get("/", getHomeContent);

// ADMIN ONLY (secure update)
router.put("/", protect, adminOnly, updateHomeContent);

module.exports = router;