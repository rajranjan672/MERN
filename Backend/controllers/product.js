const ProductCollection = require("../models/product");
const multer = require("multer")
const path = require("path")
exports.createProduct = async(req, res, next) => {

    
     let response = [];

     const createProduct = new ProductCollection({
        image: req.file.path,
        title:req.body.title,
        description: req.body.description,
        price: req.body.price
     });

     await createProduct.save((error, product) => {
         if(error) {
             response = {success: false, message: "something went wrong"};
         } else {
             response =  success= true, product= product
         }
         return res.send(response)
     });
};

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
    
})

exports.upload = multer({
    storage:Storage,
    limits: {fileSize: "1000000"},
    fileFilter:(req, file, cb) => {
        const fileTypes = /jpeg|jpg|gif|png/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb("Give proper file type")
    }
}).single('image')


exports.getProducts = async(req, res, next) => {
    let response = [];

    ProductCollection.find((error, product) => {
        if(error) {
            response = { success: false, message: "something went wrong"};
        }else {
            response =   product= product;
        };

        return res.send(response)
    });
};

