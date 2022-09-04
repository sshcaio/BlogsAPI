const services = require('../services');
const constant = require('../../constants');

const newCategoryController = async (request, response) => {
  try {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ message: constant.MISSING_CATEGORY });
    }

    const category = await services.newCategoryService(name);

    return response.status(201).json(category);
  } catch (error) {
    return response.status(500).json({ message: 'controller error' });
  }
};

const getCategoriesController = async (_request, response) => {
  const categories = await services.getCategoriesService();

  return response.status(200).json(categories);
};

module.exports = {
  newCategoryController,
  getCategoriesController,
};
