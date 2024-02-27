const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
   
    title: {
        type: String,
    },
    
    category: {
        type: String,
    },
    
    description: {
        type: String,
    },
    
    price: {
        type: String
    }
    
   
})

menuSchema.set("timestamps", true);
const MenuCollection = mongoose.model("menu", menuSchema);

module.exports = MenuCollection;
