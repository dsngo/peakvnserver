import { ProductModel, OrderModel } from "../models/Peakvn";

export default class PeakvnController {
  static async clearDB(req, res) {
    try {
      await ProductModel.remove({});
      res.status(200).send({
        code: 0,
        message: "CLEAR ALL PRODUCTS AND ORDERS",
      });
    } catch (e) {
      res.status(500).send({
        code: -4,
        message: e.data,
      });
    }
  }
  static async getAllProducts(req, res) {
    try {
      const fetchedProducts = await ProductModel.find({});
      console.log(fetchedProducts.length)
      res.status(200).send({
        code: 0,
        data: fetchedProducts,
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        data: e.message,
      });
    }
  }
  static async getProductByObjectId(req, res) {
    try {
      const { productObjectId } = req.params;
      const foundProduct = await ProductModel.findById(productObjectId);
      res.status(200).send({
        code: 0,
        data: foundProduct,
        message: "Found Product Item",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async addNewProduct(req, res) {
    try {
      const { ...newProduct } = req.body;
      await ProductModel.create(newProduct);
      res.status(200).send({
        code: 0,
        message: "Add New Product Success",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async updateProductByObjectId(rq, rs) {
    try {
      const { productObjectId } = rq.params;
      const { ...updatedProduct } = rq.body;
      await ProductModel.findByIdAndUpdate(productObjectId, updatedProduct);
      rs.status(200).send({
        code: 0,
        message: "Update Product Successful",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async getAllOrder(req, res) {
    try {
      const fetchedOrders = await OrderModel.find({});
      res.status(200).send({
        code: 0,
        data: fetchedOrders,
        message: "Fetched All Orders",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        data: e.message,
      });
    }
  }
  static async getOrderByObjectId(rq, rs) {
    try {
      const { orderObjectId } = rq.params;
      const foundOrder = await OrderModel.findById(orderObjectId);
      rs.status(200).send({
        code: 0,
        data: foundOrder,
        message: "Found User Order",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async addNewOrder(req, res) {
    try {
      const { ...newOrder } = req.body;
      await OrderModel.create(newOrder);
      res.status(200).send({
        code: 0,
        message: "Create New Order Success",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async updateOrderByObjectId(rq, rs) {
    try {
      const { orderObjectId } = rq.params;
      const { ...updatedOrder } = rq.body;
      await OrderModel.findByIdAndUpdate(orderObjectId, updatedOrder);
      rs.status(200).send({
        code: 0,
        message: "Update Order Successful",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async removeOrderById(rq, rs) {
    try {
      const { orderObjectId } = rq.params;
      await OrderModel.findByIdAndRemove(orderObjectId);
      rs.status(200).send({
        code: 0,
        message: "Remove Order Successful",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
}
