const passport = require("passport");
let handleLoginSuccess = (req, res) => {
  //   console.log(req);
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};
let handleLoginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};
let handleLogOut = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};
let handleAuthGoogle = (req, res, next) => {
  passport.authenticate("google", {
    scope: ["profile", "email", "https://www.googleapis.com/auth/drive.file"],
    state: JSON.stringify({ role: req.query.role }), // Add your role here
  })(req, res, next);
};
let handleCallBack = (req, res) => {
  passport.authenticate("google", {
    successRedirect: getSuccessRedirect(req),
    failureRedirect: "/auth/login/failed",
  })(req, res);
};
let getSuccessRedirect = (req) => {
  const state = req.query.state;
  if (state) {
    const stateData = JSON.parse(state);
    const role = stateData.role;
    // Determine the successRedirect based on the role
    if (role === process.env.ROLE_STUDENT) {
      return process.env.STUDENT_URL;
    } else if (role === process.env.ROLE_OFFICER) {
      return process.env.OFFICER_URL;
    }
  }
  return process.env.CLIENT_URL;
};
module.exports = {
  handleLoginSuccess,
  handleLoginFailed,
  handleLogOut,
  handleAuthGoogle,
  handleCallBack,
};
