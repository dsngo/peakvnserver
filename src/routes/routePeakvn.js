import PeakvnController from "../controllers/peakvnController";
const routePeakvn = require("express").Router();
const jsonParser = require("express").json();

// PRODUCTS
// READ
// ALL
routePeakvn.get("/product", PeakvnController.getAllProducts);
// BY ID
routePeakvn.get(
  "/product/:productObjectId/get",
  PeakvnController.getProductByObjectId,
);
// CREATE
routePeakvn.post(
  "/product/add-new-product",
  jsonParser,
  PeakvnController.addNewProduct,
);
// UPDATE
routePeakvn.put(
  "/product/:productObjectId/update",
  jsonParser,
  PeakvnController.updateProductByObjectId,
);

// ORDERS
// READ
// ALL
routePeakvn.get("/order", PeakvnController.getAllOrder);
// BY ID
routePeakvn.get(
  "/order/:orderObjectId/get",
  PeakvnController.getOrderByObjectId,
);
// CREATE
routePeakvn.post(
  "/order/add-new-order",
  jsonParser,
  PeakvnController.addNewOrder,
);
// UPDATE
routePeakvn.put(
  "/order/:orderObjectId/update",
  jsonParser,
  PeakvnController.updateOrderByObjectId,
);
// REMOVE
routePeakvn.delete(
  "/order/:orderObjectId/remove",
  PeakvnController.removeOrderById,
);

// CONTACT
// READ
routePeakvn.get("/contact", PeakvnController.getAllContact);
// READ BY ID
routePeakvn.get(
  "/contact/:contactObjectId/get",
  PeakvnController.getContactByObjectId,
);
// CREATE
routePeakvn.post(
  "/contact/add-new-contact",
  jsonParser,
  PeakvnController.addNewContact,
);
// UPDATE
routePeakvn.put(
  "/contact/:contactObjectId/update",
  jsonParser,
  PeakvnController.updateContactByObjectId,
);
// REMOVE
routePeakvn.delete(
  "/contact/:contactObjectId/remove",
  PeakvnController.removeContactById,
);

// USER
// CURRENCY
routePeakvn.get('/fetch/currency-rate', PeakvnController.fetchCurrencyRate)
export default routePeakvn;
