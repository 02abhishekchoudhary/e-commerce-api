const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Creatiing server
app.listen(5000, () => {
  console.log("Server started on port 4000");
});

// Connecting with mongoose
mongoose
  .connect("mongodb://localhost:27017/e-commerce-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./Routes"));
