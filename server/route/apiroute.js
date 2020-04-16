const router = require("express").Router();
const usersController = require("../controller/usersController");

router.post("/api/newUser", usersController.create)

module.exports = router;