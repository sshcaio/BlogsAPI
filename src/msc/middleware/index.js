const loginValidation = require('./loginValidation');
const { contentValidation, registerValidation,
  databaseValidation } = require('./registerValidation');
const tokenValidation = require('./tokenValidation');

module.exports = {
  loginValidation,
  contentValidation,
  registerValidation,
  databaseValidation,
  tokenValidation,
};
