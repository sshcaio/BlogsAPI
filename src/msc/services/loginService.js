const jwt = require('jsonwebtoken');
const models = require('../../database/models');
require('dotenv').config();

const loginService = async (email, password) => {
  const { id, displayName, image } =
    await models.User.findOne({ where: {email, password } });

  const loggedUser = { id, displayName, email, image };

  const token = jwt.sign(
    loggedUser,
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '7d' },
  );

  return token;
};

module.exports = loginService;