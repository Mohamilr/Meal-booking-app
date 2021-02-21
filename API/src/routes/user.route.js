const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');
const validate = require('../middlewares/validationResult');
const userRoute = Router();

userRoute.post('/create-user', userMiddleware.createUser, validate, UserController.createUser);
userRoute.post('/login', userMiddleware.login, validate, UserController.login);
userRoute.patch('/:id', UserController.confirmEmail);
userRoute.post('/forget-password', userMiddleware.forgetPassword, validate, UserController.forgetPassword);
userRoute.patch('/change-password/:id', userMiddleware.changePassword, validate, UserController.changePassword);

module.exports = userRoute;