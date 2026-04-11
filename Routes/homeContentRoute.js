const express = require("express");
const { getHomeContent,updateHomeContent } = require("../Controllers/homeContentController");


const router = express.Router();

router.get("/", getHomeContent);
router.put("/", updateHomeContent);

module.exports = router;