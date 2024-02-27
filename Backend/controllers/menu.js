const MenuCollection = require("../model/menu");


exports.createMenu = async(req, res, next) => {
     let response = [];

     const createMenu = new MenuCollection({
        title:req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price
     });

    response = await createMenu.save()
        
         return res.send(response)
     
};


exports.getMenu = async(req, res, next) => {
    let response = [];

  let  ress = await MenuCollection.find()

        return res.send(ress)
    
};

exports.editMenu = async(req,res) => {
    var ap = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    };
    MenuCollection.findByIdAndUpdate(req.params.id, {
        $set: ap}, {new: true}, (err, doc) => {
            if(!err) {res.send(doc);}
            else {
                console.log('Error in actionPlan Update: ', + JSON.stringify(err, undefined, 2));
            }
        });
};

exports.deleteMenu = async(req, res, next) => {
    
    MenuCollection.findByIdAndDelete((req.params.id), (err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('error in delete: ' +JSON.stringify(err, undefined, 2));
        }
    })
}