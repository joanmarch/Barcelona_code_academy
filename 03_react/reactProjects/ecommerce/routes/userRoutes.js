const express = require ('express');
router = express.Router();
controller = require ('../controller/userController');

router.post('/add',controller.add);
router.post('/login',controller.login);



module.exports =router;
