const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const verifyToken = require("../middleware/verifyToken");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
});

module.exports = router;