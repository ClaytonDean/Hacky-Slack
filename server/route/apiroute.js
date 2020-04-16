const router = require("express").Router();
const usersController = require("../controller/usersController");

router.post("/api/newUser", function (req, res) {
    try {

        usersController.create().then(function (response) {
            console.log("User created!", response);
        })
    }
    catch (error) {
        console.log("Unable to Insert user, user already exist", error);
    }
})