const loginValidation = require('./loginValidation');
const { contentValidation, registerValidation,
  databaseValidation } = require('./registerValidation');

module.exports = {
  loginValidation,
  contentValidation,
  registerValidation,
  databaseValidation,
};
