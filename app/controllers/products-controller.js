const Product = require("../db/models/product");

class ProductsController {
  async getAllProducts(req, res) {
    const products = await Product.find({});
    res.send(products);
  }

  async saveProduct(req, res) {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
  }

  async deleteProduct(req, res) {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  }
}

module.exports = new ProductsController();
