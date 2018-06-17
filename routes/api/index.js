const router = require("express").Router();
const articleRoutes = require("./articles");
// const nytRoutes = require("./nytapi");

// Book routes
router.use("/articles", articleRoutes);
// router.use("/nytapi", nytRoutes);

module.exports = router;
