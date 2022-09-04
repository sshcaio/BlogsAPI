const loginController = require('./loginController');
const registerController = require('./registerController');
const { userController, userIdController } = require('./userControllers');
const { categoriesController } = require('./categoriesController');

module.exports = {
  loginController,
  registerController,
  userController,
  userIdController,
  categoriesController,
};
