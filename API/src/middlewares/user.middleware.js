const { check } = require('express-validator');


const userMiddleware = {
    createUser: [
        check('firstName').notEmpty().withMessage('First Name is required'),
        check('lastName').notEmpty().withMessage('Last Name is required'),
        check('email').notEmpty().withMessage('Email is required'),
        check('email').isEmail().withMessage('incorrect email format'),
        check('password').notEmpty().withMessage('Password is required'),
        check('password').isLength(8).withMessage('Password should be more than 7 characters'),
        // check('password').contains(/[A - Z]/).withMessage('Password must contain capiral letter'),
        
    ],
    login: [
        check('email').notEmpty().withMessage('Email is required'),
        check('email').isEmail().withMessage('incorrect email format'),
        check('password').notEmpty().withMessage('Password is required'),
        // check('password').contains(/[A - Z]/).withMessage('Password must contain capiral letter'),
    ]
}

module.exports = userMiddleware;