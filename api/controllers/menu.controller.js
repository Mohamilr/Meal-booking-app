import menu from '../models/data/menu';
import meals from '../models/data/meals';

class MenuController {
  static postMenu(req, res) {
    const menuArray = req.body.menu;

    let mealCheck = false;

    menuArray.forEach((val) => {
      mealCheck = false;
      meals.forEach((element) => {
        if (element.meal === val) {
          mealCheck = true;
        }
      });

      if (!mealCheck) {
        return res.status(400).json({
          status: 400,
          error: 'Add only existing meal option',
        });
      }
    });

    if (mealCheck) {
      menu.splice(0, menu.length);
      menu.push(...menuArray);

      return res.status(201).json({
        status: 201,
        data: menu,
      });
    }
  }

  static getMenu(req, res) {
    if (Object.keys(menu).length === 0) {
      return res.status(400).json({
        status: 400,
        message: 'Menu empty. Setup menu first.',
      });
    }

    return res.status(200).json({
      status: 200,
      data: menu,
    });
  }
}

export default MenuController;
