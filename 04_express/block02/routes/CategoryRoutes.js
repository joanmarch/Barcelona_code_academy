const express = require ('express');
router = express.Router();
controller = require ('../controllers/CategoryController');

router.post('/add',controller.add);
router.post('/remove',controller.delete);
router.post('/update',controller.update);
router.get('/',controller.displayCategories);
router.get('/products',controller.displayProducts)

module.exports =router;
