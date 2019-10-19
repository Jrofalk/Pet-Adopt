const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");

router.route("/")
    .post(usersController.create);

router
    .route("/:name")
    .get(usersController.findOne)

module.exports = router;