const Meals = require('../../server/models/meals'); 
const jsonResponse = require('../helpers/jsonResponse');

class MealController {
  static async getAllMeals(req, res) {
    // try {
      
    //   const meal = await Meals.create({
    //     body: req.body 
    //   })

    //   return jsonResponse.res(res, 'error', 200, meal)
    // } catch (error) {
    //   console.error(error);
    // }
    
    // return res.status(200).json({
    //   status: 200,
    //   data: 'meals',
    // });
  }

  static async postMeal(req, res) {


    try {
      
      const meal = await Meals.create({
        body: req.body 
      })

      return jsonResponse.res(res, 'error', 200, meal)
    } catch (error) {
      console.error(error);
    }
    // return res.status(201).json({
    //   status: 201,
    //   data: 'meal posted',
    // });
  }

  static putMeal(req, res) {
    return res.status(200).json({
      status: 200,
      data: 'meal updated',
    });
  }

  static deleteMeal(req, res) {

    return res.status(200).json({
      status: 200,
      message: 'Meal deleted',
    });
  }
}

module.exports = MealController;



















