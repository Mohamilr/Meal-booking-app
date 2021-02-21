const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class authenticate {
  static generateToken (payload, secretKey, expiresIn) {
    return jwt.sign(payload, secretKey, {
      expiresIn: expiresIn,
    });
  }

  static async hashPassword (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  static async comparePassword (password, savedPassword) {
    const comparedPassword = await bcrypt.compare(password, savedPassword)
    return comparedPassword;
  }
}

module.exports = authenticate;