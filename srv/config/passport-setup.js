const passport = require("passport");
require("dotenv").config();

passport.serializeUser(function (u, d) {
  d(null, u);
});
passport.deserializeUser(function (u, d) {
  d(null, u);
});

const discordStrategy = require("passport-discord.js").Strategy;
passport.use(
  new discordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: "http://localhost:9000/auth/discord/callback",
      scope: ["guilds", "identify"],
    },
    (accessToken, refreshToken, profile, done) => {
      // DB Query Stuff
      return done(null, profile);
    }
  )
);
