const loginService = require('./loginService');
const registerService = require('./registerService');
const { userService, userIdService } = require('./userServices');
const { newCategoryService, getCategoriesService } = require('./categoriesServices');

module.exports = {
  loginService,
  registerService,
  userService,
  userIdService,
  newCategoryService,
  getCategoriesService,
};
