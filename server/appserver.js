const AWS = require("aws-sdk");
AWS.config.region = "us-east-2";
const express = require("express");
const dynamodb = require("dynamodb");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

require("./models/user");
require("./services/passport");

app.use(bodyParser.json());

app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

var http = require("http").Server(app);

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/authRoutes")(app);
// Database "models".
var {
  SpotifyPlaylist,
  SpotifyProfile,
  SpotifyTokens,
  User
} = require("./models/index");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
http.listen(PORT, function(req, res) {
  console.log("listening on *:" + PORT);
});
