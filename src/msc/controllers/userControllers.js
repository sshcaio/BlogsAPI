const services = require('../services');
const constant = require('../../constants');

const userController = async (_request, response) => {
  const users = await services.userService();

  return response.status(200).json(users);
};

const userIdController = async (request, response) => {
  const { id } = request.params;

  const user = await services.userIdService(id);
  if (user === null) {
    return response.status(404).json({ message: constant.MISSING_USER });
  }

  return response.status(200).json(user);
};

module.exports = {
  userController,
  userIdController,
};
