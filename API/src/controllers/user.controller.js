const { nanoid } = require("nanoid");
require("dotenv").config();
const db = require("../../server/models/index");
const Users = db.Users;
const { validationResult } = require("express-validator");
const authenticate = require("../utils/authenticate");
const mailer = require("../utils/email.confirmation");
const jsonResponse = require("../helpers/jsonResponse");
const jwt = require("jsonwebtoken");

class UserController {
  static async createUser(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        password
      } = req.body;
      const userName = nanoid(10);

      const exist = await Users.findOne({ where: { email: email } });

      if (exist !== null) {
        return jsonResponse(res, "error", 400, "user with email already exist");
      }

      const hashedPassword = await authenticate.hashPassword(password);

      const token = authenticate.generateToken(
        { userName, email },
        process.env.SECRET_KEY,
        process.env.SIGNUP_TOKEN_EXPIRES
      );
      const url = `localhost:9001/api/v1/auth/${token}`;

      // send confirmation email
        // mailer(email, url);

      const user = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        userName: userName,
      });

      return jsonResponse(res, "success", 201, user);
    } catch (error) {
      console.error(error);
    }
  }

  static async login (req, res) {
    try {
      const {
        email,
        password,
      } = req.body;

      const user = await Users.findOne({ where: { email: email } });

      if (user === null) {
        return jsonResponse(res, "error", 404, "user with email does not exist, kindly sign up");
      }

      const comparedPassword = await authenticate.comparePassword(password, user.password);

      if(!comparedPassword) {
        return jsonResponse(res, "error", 402, "invalid credentials");
      }

      const accessToken = authenticate.generateToken({email, id: user.id}, process.env.SECRET_KEY, process.env.LOGIN_TOKEN_EXPIRES)
      // const refreshToken = authenticate.generateToken({email, id: user.id}, process.env.SECRET_KEY, process.env.REFRESH_TOKEN_EXPIRES)

      res.cookie('Token', accessToken, {
        maxAge: 604800,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false
      });

      return jsonResponse(res, 'success', 201, {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
      })
    } catch (error) {
      console.error(error)
    }
  }

  static confirmEmail(req, res) {
    try {
      const token = req.params.id;

      jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
          return jsonResponse(res, "success", 402, "invalid token");
        } else {
          await Users.update(
            { Authenticated: true },
            { where: { userName: decoded.userName, email: decoded.email } }
          );
        }
      });

      return jsonResponse(
        res,
        "success",
        201,
        "user authenticated successfully"
      );
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserController;
