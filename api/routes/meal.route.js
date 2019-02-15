import { Router} from 'express';

//controller
import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.put('/:id', MealController.getSingleMeal);
// router.delete('/', MealController.deleteAMeal);
// router.post('/', MealController.setMeals);
// router.get('/', MealController.getAMenu);
// router.post('/', MealController.selectAMeal);
// router.put('/', MealController.modifyAMeal);
// router.get('/', MealController.getAllOrders);

export default router;


