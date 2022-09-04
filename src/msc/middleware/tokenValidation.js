const jwt = require('jsonwebtoken');
const constant = require('../../constants');
require('dotenv').config();

const validateToken = async (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) {
      return response.status(401).json({ message: constant.MISSING_TOKEN });
    }

    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (error) {
    return response.status(401).json({ message: constant.INVALID_TOKEN });
  }

  next();
};

module.exports = validateToken;
