const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const shoesRoute = require("./routes/shoes");
app.use("/shoes", shoesRoute);
const brandsRoute = require("./routes/brands");
app.use("/brands", brandsRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// connect
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.listen(8000);
