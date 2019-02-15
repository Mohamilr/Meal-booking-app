import { Router} from 'express';
// import MealsSerivce from '../services/meal.service';

//controller
import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);

export default router;


