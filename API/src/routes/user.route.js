const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const validate = require('../middlewares/validationResult');
const userRoute = Router();

userRoute.post('/create-user', userMiddleware.createUser, validate, UserController.createUser);
userRoute.post('/login', userMiddleware.login, validate, UserController.login);
userRoute.patch('/:id', UserController.confirmEmail);

module.exports = userRoute;