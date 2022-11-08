const { model } = require("mongoose");
const Product = require("../Models/product");

// API for create product
// Method: POST
module.exports.create = async (req, res) => {
  try {
    // First we check is product already present
    let product = await Product.findOne({ name: req.body.name });
    console.log(req.body.name);

    // If product not present then we create new product
    if (!product) {
      Product.create(req.body, (err, prod) => {
        if (err) {
          return response.json(500, {
            message: "Error while creating a product",
          });
        }
        return res.json(200, {
          message: "Product is created successfully!",
          data: prod,
        });
      });
    } else {
      return res.json(200, {
        message: "Product already exist",
        data: product,
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "Error in creating a product",
    });
  }
};

// API for listing all products
// Method: GET
module.exports.products = async (req, res) => {
  try {
    let product = await Product.find({});
    if (product) {
      return res.json(200, {
        message: "Products List",
        data: product,
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "Error in finding products",
    });
  }
};

// API for update the products
// Method: PUT
module.exports.update = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      quantity: req.query.number,
    });
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(200).json({
        message: "Product with provided id is not found",
      });
    }
    return res.status(200).json({
      message: "Product Updated Successfully!",
      data: product,
    });
  } catch (err) {
    return res.json(500, {
      message: "Error in updating the product",
    });
  }
};

// API for deleting the product
// Method: DELETE
module.exports.delete = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete(req.params.id);
    if (!product) {
      return res.status(200).json({
        message: "Product with provided id is not found",
      });
    }
    return res.status(200).json({
      message: "Product Deleted Successfully!",
    });
  } catch (err) {
    return res.json(500, {
      message: "Error in deleting the product",
    });
  }
};
