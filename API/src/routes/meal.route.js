const { Router } = require('express');

const MealController = require('../controllers/meal.controller');

const mealRoute = Router();

mealRoute.get('/', MealController.getAllMeals);
mealRoute.post('/', MealController.postMeal);
mealRoute.put('/:id', MealController.putMeal);
mealRoute.delete('/:id', MealController.deleteMeal);

module.exports = mealRoute;






