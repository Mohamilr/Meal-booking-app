const { Router } = require('express');
const userRoute = require('./user.route');
const mealRoute = require('./meal.route');
const menuRoute = require('./menu.route');
const orderRoute = require('./orders.route');

const router = Router();

router.use('/auth/', userRoute);
router.use('/meals/', mealRoute);
router.use('/menu/', menuRoute);
router.use('/orders/', orderRoute);

module.exports = router;