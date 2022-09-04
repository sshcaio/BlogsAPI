const loginService = require('./loginService');
const registerService = require('./registerService');
const { userService, userIdService } = require('./userServices');
const { newCategoryService, getCategoriesService } = require('./categoriesServices');
const { getPostsService } = require('./postServices');

module.exports = {
  loginService,
  registerService,
  userService,
  userIdService,
  newCategoryService,
  getCategoriesService,
  getPostsService,
};
