var passport = require("passport");
var twitchStrategy = require("passport-twitch").Strategy;
const dynamodb = require("dynamodb");
const keys = require("../config/keys");

const User = dynamodb.model("user");

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new twitchStrategy(
    {
      clientID: keys.TWITCH_CLIENT_ID,
      clientSecret: keys.TWITCH_CLIENT_SECRET,
      callbackURL: "/auth/twitch/callback",
      scope: "user_read",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
