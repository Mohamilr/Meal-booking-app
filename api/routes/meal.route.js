import { Router } from 'express';

import MealController from '../controllers/meal.controller';

const mealRoute = Router();

mealRoute.get('/', MealController.getAllMeals);
mealRoute.post('/', MealController.postMeal);
mealRoute.put('/:id', MealController.putMeal);
mealRoute.delete('/:id', MealController.deleteMeal);

export default mealRoute;






