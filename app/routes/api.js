const express = require("express");
const router = new express.Router();
const ProductsController = require("./../controllers/products-controller");
const OrdersController = require("./../controllers/orders-controler");

// ======================  PRODUCTS  =============================

router.get("/api/products", ProductsController.getAllProducts);
router.post("/api/products", ProductsController.saveProduct);
router.delete("/api/products/:id", ProductsController.deleteProduct);

// ======================  ORDERS  ===============================

router.get("/api/orders", OrdersController.getAllOrders);
router.post("/api/orders", OrdersController.saveOrder);
router.delete("/api/orders/:id", OrdersController.deleteOrder);

// ===============================================================

module.exports = router;
