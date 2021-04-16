const express = require("express");
const router = express.Router();
const { Keys } = require("../models");

/* GET home page. */
router.get("/", (req, res) => {
  if (!req.session.user) {
    res.redirect("/auth/login");
  } else {
    // Get current guilds in database.
    Keys.findAll().then((keys) =>
      res.status(200).json({ user: req.session.user.username, keys: keys })
    );
  }
});

router.get("/add", (req, res) => {
  if (!req.session.user) {
    res.redirect("/auth/login");
  } else {
    res.send("Add Form Page Here.");
  }
});

router.post("/add", (req, res) => {
  // Store Key in DB
  Keys.create(req.body).then(res.redirect("/keys"));
});

module.exports = router;
