const services = require('../services');

const registerController = async (request, response) => {
  const { displayName, email, password, image } = request.body;

  await services.registerService(displayName, email, password, image);

  const loginToken = await services.loginService(email, password);

  return response.status(201).json({ token: loginToken });
};

module.exports = registerController;
