const Order = require("./../db/models/order");

class OrdersController {
  async getAllOrders(req, res) {
    const orders = await Order.find({});
    res.send(orders);
  }

  async saveOrder(req, res) {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartItems
    ) {
      return res.send({ message: "Data is required." });
    }

    const order = await Order(req.body).save();
    res.send(order);
  }

  async deleteOrder(req, res) {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
  }
}

module.exports = new OrdersController();
