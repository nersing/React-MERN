const router = require("express").Router();
const articleRoutes = require("./articles");

// article routes
router.use("/article", articleRoutes);

module.exports = router;