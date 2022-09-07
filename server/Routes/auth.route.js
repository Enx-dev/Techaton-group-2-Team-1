const express = require("express");
const { authenticate } = require("passport");
const passport = require("passport");
const {
  signUp,
  login,
  refreshToken,
  logout,
  forgotPassword,
} = require("../controllers/auth.controller");
require("../controllers/thirdParty.controllerr");

const auth = express.Router();

auth.post("/signup", signUp);

auth.post("/login", login);

auth.get('/success', (req, res, next)=>{
  res.status(200).json({msg: `logged in successfully`})
}
)

auth.get(
  "/google",
  passport.authenticate("google", { scope: [`profile`, `email`] })
);
auth.get("/google/callback", passport.authenticate('google', {failureRedirect: '/failed'} ),
function(req,res){
  res.redirect('/success')
}
);

auth.get("/refresh", refreshToken);
auth.get("/logout", logout);
auth.get("/forgotPassword", forgotPassword);

module.exports = auth;
