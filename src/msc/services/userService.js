const models = require('../../database/models');

const userService = async () => {
  const users = await models.User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = userService;