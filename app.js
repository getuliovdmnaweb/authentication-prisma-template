const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Something happened here");
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the App",
  });
});

app.listen(8080);
