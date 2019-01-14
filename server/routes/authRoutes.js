const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/twitch",
    passport.authenticate("twitch", {
      scope: ["user_read"]
    })
  );

  app.get(
    "/auth/twitch/callback",
    passport.authenticate("twitch"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
