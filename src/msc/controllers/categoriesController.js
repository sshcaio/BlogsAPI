const services = require('../services');
const constant = require('../../constants');

const categoriesController = async (request, response) => {
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

module.exports = {
  categoriesController,
};
