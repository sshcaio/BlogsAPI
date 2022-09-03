const services = require('../services');

const loginController = async (request, response) => {
  const { email, password } = request.body;
  const loginToken = await services.loginService(email, password);

  return response.status(200).json({ token: loginToken });
};

module.exports = loginController;
