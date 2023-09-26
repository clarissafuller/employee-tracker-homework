const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes.js");
const apiRoutes = require("./api/index.js");

// HTML ROUTES
router.use(htmlRoutes);
// API ROUTES
router.use("/api", apiRoutes);

module.exports = router;
