const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    
    price: {
        type: String,
    }
})

productSchema.set("timestamps", true);
const ProductCollection = mongoose.model("product", productSchema);

module.exports = ProductCollection;
