const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login", passport.authenticate("discord.js"));

router.get(
  "/discord/callback",
  passport.authenticate("discord.js", { failureRedirect: "/" }),
  (req, res) => {
    console.log("Adding req.session.user to req.user");
    req.session.user = req.user;
    console.log(`Req.session.user is ${req.user}`);
    res.redirect("/");
  }
);

module.exports = router;
