import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const menuRoute = Router();

menuRoute.post('/', MenuController.postMenu);
menuRoute.get('/', MenuController.getMenu);

export default menuRoute;
