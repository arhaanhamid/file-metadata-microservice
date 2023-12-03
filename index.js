var express = require("express");
var cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const upload = multer({ dest: process.cwd() + "uploads" });

const fs = require("fs");

const directoryPath = "uploads";

fs.access(directoryPath, fs.constants.W_OK, (err) => {
  if (err) {
    console.error(
      `The server does not have write access to the '${directoryPath}' directory.`
    );
  } else {
    console.log(
      `The server has write access to the '${directoryPath}' directory.`
    );
  }
});

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
  console.log(req);
  console.log(req.body);
  console.log(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
