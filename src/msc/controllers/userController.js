const services = require('../services');

const userController = async (_request, response) => {
  const users = await services.userService();

  return response.status(200).json(users);
};

module.exports = userController;
