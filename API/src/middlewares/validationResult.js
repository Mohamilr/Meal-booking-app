const { validationResult } = require("express-validator");
const jsonResponse = require('../helpers/jsonResponse');

module.exports = function validate(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return jsonResponse(res, 'error', 422, errors)
  }

  next();
};
