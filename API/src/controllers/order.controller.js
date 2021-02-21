
class OrderController {
  static postOrder(req, res) {
    return res.status(201).json({
      status: 201,
      data: 'order posted',
    });
  }

  static putOrder(req, res) {
    return res.status(200).json({
      status: 200,
      data: 'order updated',
    });
  }

  static getOrders(req, res) {
    return res.status(200).json({
      status: 200,
      data: 'all orders',
    });
  }
}

module.exports = OrderController;
