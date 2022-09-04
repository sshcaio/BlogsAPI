const loginController = require('./loginController');
const registerController = require('./registerController');
const { userController, userIdController } = require('./userControllers');
const { newCategoryController, getCategoriesController } = require('./categoriesController');
const { getPostsController } = require('./postControllers');

module.exports = {
  loginController,
  registerController,
  userController,
  userIdController,
  newCategoryController,
  getCategoriesController,
  getPostsController,
};
