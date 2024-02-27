const express = require('express');
const router = express.Router();
const MenuController = require("../controllers/menu");

router.post(
    "/createMenu", 
    MenuController.createMenu
);

router.get(
    "/getMenu",
    MenuController.getMenu
);

router.put(
    '/editMenu/:id', 
    MenuController.editMenu
);

router.delete(
    "/deleteMenu/:id", 
    MenuController.deleteMenu
);



module.exports = router;