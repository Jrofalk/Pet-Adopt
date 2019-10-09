const router = require("express").Router();
const petRoutes = require("./pets");

router.use("/pets", petRoutes);

module.exports = router;