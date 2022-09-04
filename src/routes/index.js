const express = require('express');
const controllers = require('../msc/controllers');
const middleware = require('../msc/middleware');

const router = express.Router();

router.post('/login',
  middleware.loginValidation,
  controllers.loginController);

router.post('/user',
  middleware.contentValidation,
  middleware.registerValidation,
  middleware.databaseValidation,
  controllers.registerController);

router.get('/user',
  middleware.tokenValidation,
  controllers.userController);

module.exports = router;