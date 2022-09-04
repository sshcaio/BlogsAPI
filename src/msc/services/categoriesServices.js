const models = require('../../database/models');

const newCategoryService = async (name) => {
  const category = await models.Category.create({ name });

  return category;
};

const getCategoriesService = async () => {
  const categories = await models.Category.findAll();

  return categories;
};

module.exports = {
  newCategoryService,
  getCategoriesService,
};
