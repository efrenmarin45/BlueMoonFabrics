const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// var User = require("./server/models/userLogin.js");
var User = require("./src/server/models/userLogin");

passport.use(new LocalStrategy(
  {
    usernameField: "empID",
    passwordField: 'password'
  },
  function (username, password, done) {
    User.findOne({ 'empID': username }, function (err, user) {
      if (err)
        return done(err);

      if (!user)
        return done(null, {message: "User not Found"});

      if (!user.validPassword(password))
        return done(null, {message: "Invalid Password"}); 

      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;