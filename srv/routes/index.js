const express = require("express");
const router = express.Router();
const { Guild } = require("../models");

/* GET home page. */
router.get("/", (req, res) => {
  if (!req.session.user) {
    res.redirect("/auth/login");
  } else {
    // Get current guilds in database.
    Guild.findAll().then((guilds) =>
      res.status(200).json({ user: req.session.user.username, guilds: guilds })
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
  // Store Guild in DB
  Guild.create(req.body).then(res.redirect("/"));
});

module.exports = router;
