const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const WrapAsync = require("../utils/WrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");
const user = require("../models/user.js");

router.route("/signup") // combined two routes using router.route functionality
.get(userController.renderSignupForm)
// saving signed up user to a database
.post(WrapAsync(userController.signup));

router.route("/login")
.get(userController.registeredUserLoginValidation)
// allowing registered user to log in 
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect: '/login', failureFlash: true}),userController.login);


router.get("/logout",userController.logout);

module.exports = router;