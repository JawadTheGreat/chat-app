//external imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports

const app = express();
dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

//request parsers
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_PARSER));

//routing setup

//error handling

app.listen(process.env.PORT, () =>
  console.log(`app listening to port ${process.env.PORT}`),
);
