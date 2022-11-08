const mongoose = require("mongoose");

// Creating schema of product
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    quantity: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
