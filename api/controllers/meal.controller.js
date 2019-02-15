import MealService from '../services/meal.service';

const MealController = {
    fetchAllMeals(req, res){
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },
    addAMeal(req, res){
        const newMeal = req.body;
        const createdMeal = MealService.addMeal(newMeal);
        return res.json({
            status: 'success',
            data: createdMeal
        }).status(200);
    },
    getSingleMeal(req, res){
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
          return res.json({
            status: 'success',
            data: foundMeal
        }).status(201);
    },
//     deleteAMeal(req, res){
//         const deleteMeal = MealService.deleteAMeal(id);
//         return res.json({
//             status: 'success',
//             data: deleteMeal
//     }).status(204);
// },
//     setMeals(req, res){
//         const setMeals = MealService.setMeals
//         return res.json({
//             status: 'success',
//             data: deleteMeal
//     }).status(204);
//     },
//     getAMenu(req, res){
//         const getmenu = MealService.getAMenu;
//         return res.json({
//             status: 'success',
//             data: deleteMeal
//     }).status(200);
//     },
//     selectAMeal(req,res){
//         const selectMeal = MealService.selectAMeal;
//         return res.json({
//             status: 'success',
//             data: deleteMeal
//     }).status(200);
//     },
//     modifyAMeal(req, res){
//         const modifyMeal = MealService.modifyAMeal;
//         return res.json({
//             status: 'success',
//             data: deleteMeal
//     }).status(200);
//     },
//     getAllOrders(req,res){
//         const getOrders = MealService.getAllOrders;
//         return res.json({
//             status: 'success',
//             data: deleteMeal
//     }).status(200);
//  }
};

export default MealController;

