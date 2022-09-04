const services = require('../services');

const getPostsController = async (_request, response) => {
  const posts = await services.getPostsService();

  return response.status(200).json(posts);
};

module.exports = {
  getPostsController,
};
