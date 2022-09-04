const models = require('../../database/models');

const registerService = async (displayName, email, password, image) => {
  await models.User.create({ displayName, email, password, image });
};

module.exports = registerService;