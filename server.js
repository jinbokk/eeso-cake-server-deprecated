require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Connect MongoDB
mongoose
  .connect(process.env.MONGODB_DATABASE_URL)
  // useNewUrlParser , useUnifiedTopology , useFindAndModify ,
  // and useCreateIndex are no longer supported options.
  // Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology ,
  // and useCreateIndex are true , and useFindAndModify is false .
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Route
app.use("/product", require("./routes/product"));

app.listen(process.env.PORT || 8000, () => console.log("Server is running"));
