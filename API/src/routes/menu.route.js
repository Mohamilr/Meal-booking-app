const { Router } = require('express');
const MenuController = require('../controllers/menu.controller');

const menuRoute = Router();

menuRoute.post('/', MenuController.postMenu);
menuRoute.get('/', MenuController.getMenu);

module.exports = menuRoute;
