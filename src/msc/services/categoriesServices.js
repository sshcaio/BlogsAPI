const models = require('../../database/models');

const newCategoryService = async (name) => {
  const category = await models.Category.create({ name });

  return category;
};

module.exports = {
  newCategoryService,
};
