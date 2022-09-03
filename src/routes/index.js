const express = require('express');
const controllers = require('../msc/controllers');
const middleware = require('../msc/middleware');

const router = express.Router();

router.post('/login', middleware.loginValidation, controllers.loginController);

module.exports = router;