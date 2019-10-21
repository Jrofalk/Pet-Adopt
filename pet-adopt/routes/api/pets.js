const router = require("express").Router();
const petsController = require("../../controllers/petsController");

router.route("/")
  .get(petsController.findAll)
  .post(petsController.create)

router
  .route("/:name")
  .get(petsController.findOne)
  .put(petsController.update)
  // .delete(petsController.remove)

  router
    .route("/:id")
    .delete(petsController.remove)


module.exports = router;