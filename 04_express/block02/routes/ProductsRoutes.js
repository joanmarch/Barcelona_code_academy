const express = require ('express');
router = express.Router();
controller = require ('../controllers/ProductsController');

router.post('/add',controller.add);
router.post('/remove',controller.delete);
router.post('/update',controller.update);
router.get('/',controller.displayProducts);
router.get('/:category',controller.displayAllProductsCategory);
router.get('/:product',controller.displaySingleProduct);


module.exports =router;
