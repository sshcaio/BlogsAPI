const loginController = require('./loginController');
const registerController = require('./registerController');
const { userController, userIdController } = require('./userControllers');

module.exports = {
  loginController,
  registerController,
  userController,
  userIdController,
};
