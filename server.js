require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");

const ImageModel = require("./models/image_model");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null);
  },
});

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null,file.originalname);
  },
});

const upload = multer({ storage: Storage }).single("testImg");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose Connect start
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));
// mongoose Connect end

app.get("/", (req, res) => {
  res.send("upload file");
});

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new ImageModel({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
      });
      newImage
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
});

app.listen(process.env.PORT || 8000);
