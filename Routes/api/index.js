const express = require("express");

const router = express.Router();

const productApi = require("../../Controllers/products");

router.get("/products", productApi.products);

router.post("/products/create", productApi.create);

router.put("/products/:id/update_quantity", productApi.update);

router.delete("/products/:id", productApi.delete);

module.exports = router;