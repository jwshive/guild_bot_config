const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  console.log(req.session);
  if (!req.session.user) {
    res.redirect("/auth/login");
  } else {
    res.send(`Hello ${req.session.user.username}`);
  }
});

module.exports = router;
