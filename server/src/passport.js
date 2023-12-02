const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email", "https://www.googleapis.com/auth/drive.file"],
    },
    function (accessToken, refreshToken, profile, callback) {
      //   console.log("Access Token:", accessToken);
      // const email = profile.emails ? profile.emails[0].value : null;
      // req.session.email = email;
      console.log("passport");
      profile.accessToken = accessToken;
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // console.log(user);
  done(null, user);
});
