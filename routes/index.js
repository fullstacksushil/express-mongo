const productController = require("../controllers/product");
const express = require("express");

const router = express.Router();
// Product Routes
router.get("/", (req, res) => {
  res.send("it works");
});
router.post("/products", productController.getProducts);
router.post("/addproduct", productController.addProduct);

module.exports = router;
