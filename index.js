var express = require("express");
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", multer.single("avatar"), function (req, res) {
  console.log(req);
  console.log(req.body);
  console.log(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
