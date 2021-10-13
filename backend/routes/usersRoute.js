const express = require("express");
router = express.Router();
usersRoute = require("../controllers/usersContollers");

router.get("/", usersRoute.usersController)

module.exports = router;