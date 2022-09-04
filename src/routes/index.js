const express = require('express');
const controllers = require('../msc/controllers');
const middleware = require('../msc/middleware');

const router = express.Router();

router.post('/login', middleware.loginValidation, controllers.loginController);
router.post('/user', middleware.registerValidation, controllers.registerController);

module.exports = router;