const constant = require('../../constants');
const models = require('../../database/models');

const registerValidation = async (request, response, next) => {
  try {
    const { displayName, email, password, image } = request.body;
    if (!displayName || !email || !password || !image) {
      return response.status(400).json({ message: constant.MISSING_LOGIN_FIELDS });
    }

    if (displayName.length < constant.MIN_DISPLAY_NAME) {
      return response.status(400).json({ message: constant.MIN_DISPLAY_NAME_MESSAGE });
    }

    if (password.length < constant.MIN_PASSWORD) {
      return response.status(400).json({ message: constant.MIN_PASSWORD_MESSAGE });
    }

    if (!constant.EMAIL_VALIDATION.test(email)) {
      return response.status(400).json({ message: constant.EMAIL_VALIDATION_MESSAGE });
    }

    const registeredUsers = await models.User.findAll({ attributes: ['email'] });
    const registered = registeredUsers.find((user) => user.dataValues.email === email)
    if (registered) {
      return response.status(409).json({ message: constant.EMAIL_ALREADY_REGISTERED });
    }
  
    next();
  } catch (error) {
    return response.status(500).json({ message: 'validation error' });
  }
};

module.exports = registerValidation;
