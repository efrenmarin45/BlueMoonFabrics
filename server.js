const express = require("express");
const app = express();
const api = require("./api"); //references the routes folder
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan"); 
const passport = require("passport");
const users = require("./routes/api/users");

app.set('port', (process.env.PORT || 8080));
const User = require("../models/userLogin");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());


app.use(logger("dev"));


app.use("./api", api);
app.use(express.static("static"));


app.use(function (req, res){
  const err = new Error("Not Found")
  err.status = 404;
  res.json(err)
});


mongoose.connect('mongodb+srv://heftyhenry1:bluemoon1@cluster0-3jmno.mongodb.net/test?retryWrites=true&w=majority');

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Connected to MongoDB!")
});
db.runCommand( { connectionStatus: 1, showPrivileges: true })
connectionStatus.authInfo

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport")(passport);
// Routes
app.use("/api/users", users);