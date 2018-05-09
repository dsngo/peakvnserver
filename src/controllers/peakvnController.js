import fetch from "node-fetch";
import { parseString } from "xml2js";
import { ProductModel, OrderModel, ContactModel } from "../models/Peakvn";

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
      console.log(fetchedProducts.length);
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
        message: "Found Product Item Successfully",
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
        message: "Add New Product Successfully",
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
        message: "Update Product Successfully",
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
        message: "Fetched All Orders Successfully",
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
        message: "Found User Order Successfully",
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
        message:
          "Tạo đơn hàng thành công, cảm ơn bạn đã mua hàng tại PeakEight",
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
        message: "Update Order Successfully",
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
        message: "Remove Order Successfully",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async getAllContact(req, res) {
    try {
      const fetchedOrders = await ContactModel.find({});
      res.status(200).send({
        code: 0,
        data: fetchedOrders,
        message: "Fetched All Orders Successfully",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        data: e.message,
      });
    }
  }
  static async getContactByObjectId(rq, rs) {
    try {
      const { contactObjectId } = rq.params;
      const foundContact = await ContactModel.findById(contactObjectId);
      rs.status(200).send({
        code: 0,
        data: foundContact,
        message: "Found Contact Successfully",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async addNewContact(req, res) {
    try {
      const { ...newContact } = req.body;
      await ContactModel.create(newContact);
      res.status(200).send({
        code: 0,
        message:
          "Gửi thông tin thành công, cảm ơn bạn đã liên hệ với PeakEight",
      });
    } catch (e) {
      res.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async updateContactByObjectId(rq, rs) {
    try {
      const { contactObjectId } = rq.params;
      const { ...updatedContact } = rq.body;
      await ContactModel.findByIdAndUpdate(contactObjectId, updatedContact);
      rs.status(200).send({
        code: 0,
        message: "Update Contact Successfully",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async removeContactById(rq, rs) {
    try {
      const { contactObjectId } = rq.params;
      await ContactModel.findByIdAndRemove(contactObjectId);
      rs.status(200).send({
        code: 0,
        message: "Remove Contact Successfully",
      });
    } catch (e) {
      rs.status(500).send({
        code: -1,
        message: e.message,
      });
    }
  }
  static async fetchCurrencyRate(req, res) {
    fetch("https://www.vietcombank.com.vn/ExchangeRates/ExrateXML.aspx")
      .then(rs => rs.text())
      .then(data =>
        parseString(data, (e, r) =>
          res.status(200).send(
            r.ExrateList.Exrate.map(e => ({
              currencyName: e.$.CurrencyName,
              currencyCode: e.$.CurrencyCode,
              sellRate: e.$.Sell,
            })),
          ),
        ),
      );
  }
}
