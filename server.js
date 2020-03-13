const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan"); 

const PORT = process.env.PORT || 8080;

const User = require("../models/userLogin");
const app = express();

app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bluemoonDB", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});