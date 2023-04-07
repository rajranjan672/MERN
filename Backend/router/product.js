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

router.put(
    '/editProduct/:id', 
    ProductController.editProduct
);

router.delete(
    "/deleteProduct/:id", 
    ProductController.deleteProducts
);



module.exports = router;