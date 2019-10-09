const router = require("express").Router();
const petsController = require("../../controllers/petsController");

router.route("/")
  .get(petsController.findAll)
  .post(petsController.create);

router
  .route("/:id")
  .get(petsController.findById)
  .put(petsController.update)
  .delete(petsController.remove);

module.exports = router;