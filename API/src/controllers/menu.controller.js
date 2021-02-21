
class MenuController {
  static postMenu(req, res) {

      return res.status(201).json({
        status: 201,
        data: 'menu posted',
      });
  }

  static getMenu(req, res) {
    return res.status(200).json({
      status: 200,
      data: 'all menu',
    });
  }
}

module.exports = MenuController;
