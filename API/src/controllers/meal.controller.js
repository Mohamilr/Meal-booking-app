import meals from '../models/data/meals';

class MealController {
  static getAllMeals(req, res) {
    if (meals.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    return res.status(200).json({
      status: 200,
      data: meals,
    });
  }

  static postMeal(req, res) {
    const { meal } = req.body;

    meals.push({
      id: meals.length + 1,
      meal,
    });

    return res.status(201).json({
      status: 201,
      data: [{
        id: meals.length,
        meal,
      }],
    });
  }

  static putMeal(req, res) {
    if (meals.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    const id = parseInt(req.params.id, 10);
    const { meal } = req.body;

    meals[id - 1] = {
      id,
      meal,
    };

    return res.status(200).json({
      status: 200,
      data: [{
        id,
        meal,
      }],
    });
  }

  static deleteMeal(req, res) {
    if (meals.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    const id = parseInt(req.params.id, 10);

    meals.splice(id - 1, 1);

    return res.status(200).json({
      status: 200,
      message: 'Meal deleted',
    });
  }
}

export default MealController;



















