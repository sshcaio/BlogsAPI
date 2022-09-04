const constant = require('../../constants');
const models = require('../../database/models');

const loginValidation = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(400).json({ message: constant.MISSING_LOGIN_FIELDS });
    }
  
    const registeredUser = await models.User.findOne({ where: { email, password } });
    console.log(registeredUser);

    if (!registeredUser) {
      return response.status(400).json({ message: constant.INVALID_LOGIN });
    }
  
    next();
  } catch (error) {
    return response.status(500).json({ message: 'validation error' });
  }
};

module.exports = loginValidation;