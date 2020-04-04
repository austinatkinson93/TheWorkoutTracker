var express = require("express");
var router = express.Router();
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");

router.use("/api", apiRoutes);
router.use(htmlRoutes);

module.exports = router;