const models = require('../../database/models');

const userService = async () => {
  const users = await models.User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const userIdService = async (id) => {
  const user = await models.User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return null;
  }
  return user;
};

module.exports = { 
  userService,
  userIdService,
};
