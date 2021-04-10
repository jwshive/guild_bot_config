const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const session = require("express-session");
const app = express();
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const sequelize = require("./config/database");

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Database Init
sequelize
  .authenticate()
  .then(console.log("Postgres, ONLINE"))
  .catch((error) => console.error(error));

// Express
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    proxy: true,
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

module.exports = app;
