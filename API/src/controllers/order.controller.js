import menu from '../models/data/menu';
import orders from '../models/data/orders';

class OrderController {
  static postOrder(req, res) {
    const { meal } = req.body;

    if (!menu.includes(meal)) {
      return res.status(400).json({
        status: 400,
        error: 'Choose a meal from the menu',
      });
    }

    orders.push({
      id: orders.length + 1,
      meal,
      createdOn: new Date(),
    });

    return res.status(201).json({
      status: 201,
      data: [{
        id: orders.length,
        meal,
      }],
    });
  }

  static putOrder(req, res) {
    const id = parseInt(req.params.id, 10);
    const { meal } = req.body;

    if (!menu.includes(meal)) {
      return res.status(400).json({
        status: 400,
        error: 'Choose a meal from the menu',
      });
    }

    if (orders.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    orders[id - 1] = {
      id,
      meal,
      modifiedOn: new Date(),
    };

    return res.status(200).json({
      status: 200,
      data: [{
        id,
        meal,
      }],
    });
  }

  static getOrders(req, res) {
    if (orders.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    return res.status(200).json({
      status: 200,
      data: orders,
    });
  }
}

export default OrderController;
