const passport = require("passport");
import useService from "../services/userService";
let handleLoginSuccess = (req, res) => {
  // console.log(req.user);
  if (req.user) {
    res.status(200).json({
      errCode: 0,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(200).json({ errCode: 1, message: "Not Authorized" });
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
let handleAuthGoogle = async (req, res, next) => {
  // let role = await useService.getUser()
  // console.log(req.body);
  passport.authenticate("google", {
    scope: ["profile", "email", "https://www.googleapis.com/auth/drive.file"],
    state: JSON.stringify({ role: req.query.role }), // Add your role here
  })(req, res, next);
};
let handleCallBack = (req, res) => {
  // console.log("hi");
  passport.authenticate("google", {
    successRedirect: getSuccessRedirect(req),
    failureRedirect: "/auth/login/failed",
  })(req, res);
};
let getSuccessRedirect = (req) => {
  const state = req.query.state;
  // console.log(email);
  if (state) {
    const stateData = JSON.parse(state);
    const role = stateData.role;
    // Determine the successRedirect based on the role
    if (role === process.env.ROLE_STUDENT) {
      return process.env.STUDENT_LOGIN_SUCCESS_URL;
    } else if (role === process.env.ROLE_ADMIN) {
      return process.env.ADMIN_LOGIN_SUCCESS_URL;
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
