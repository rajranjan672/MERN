const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/product");

router.post(
    "/createProduct", ProductController.upload,
    ProductController.createProduct
);

router.get(
    "/getProduct",
    ProductController.getProducts
);


module.exports = router;