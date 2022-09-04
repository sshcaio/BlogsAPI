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

router.post('/categories',
  middleware.tokenValidation,
  controllers.categoriesController);

router.get('/user',
  middleware.tokenValidation,
  controllers.userController);

router.get('/user/:id',
  middleware.tokenValidation,
  controllers.userIdController);



module.exports = router;