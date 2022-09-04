const MISSING_LOGIN_FIELDS = 'Some required fields are missing';
const INVALID_LOGIN = 'Invalid fields';
const MIN_DISPLAY_NAME = 8;
const MIN_DISPLAY_NAME_MESSAGE = '"displayName" length must be at least 8 characters long';
const MIN_PASSWORD = 6;
const MIN_PASSWORD_MESSAGE = '"password" length must be at least 6 characters long';
const EMAIL_VALIDATION = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const EMAIL_VALIDATION_MESSAGE = '"email" must be a valid email';
const EMAIL_ALREADY_REGISTERED = 'User already registered';
const MISSING_TOKEN = 'Token not found';
const INVALID_TOKEN = 'Expired or invalid token';
const MISSING_USER = 'User does not exist';
const MISSING_CATEGORY = '"name" is required';

module.exports = { 
  MISSING_LOGIN_FIELDS,
  INVALID_LOGIN,
  MIN_DISPLAY_NAME,
  MIN_DISPLAY_NAME_MESSAGE,
  MIN_PASSWORD,
  MIN_PASSWORD_MESSAGE,
  EMAIL_VALIDATION,
  EMAIL_VALIDATION_MESSAGE,
  EMAIL_ALREADY_REGISTERED,
  MISSING_TOKEN,
  INVALID_TOKEN,
  MISSING_USER,
  MISSING_CATEGORY,
};
