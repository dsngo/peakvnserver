import PeakvnController from '../controllers/peakvnController';
const routePeakvn = require('express').Router();
const jsonParser = require('express').json();

// PRODUCTS
routePeakvn
  .route('/product')
  .get(PeakvnController.getAllProducts)
  .post(jsonParser, PeakvnController.addNewProduct);
routePeakvn
  .route('/product/:productObjectId')
  .get(PeakvnController.getProductByObjectId)
  .put(jsonParser, PeakvnController.updateProductByObjectId);

// ORDERS
routePeakvn
  .route('/order')
  .get(PeakvnController.getAllOrder)
  .post(jsonParser, PeakvnController.addNewOrder);

routePeakvn
  .route('/order/:orderObjectId')
  .get(PeakvnController.getOrderByObjectId)
  .put(jsonParser, PeakvnController.updateOrderByObjectId)
  .delete(PeakvnController.removeOrderById);

// CONTACT
routePeakvn
  .route('/contact')
  .get(PeakvnController.getAllContact)
  .post(jsonParser, PeakvnController.addNewContact);
routePeakvn
  .route('/contact/:contactObjectId')
  .get(PeakvnController.getContactByObjectId)
  .put(jsonParser, PeakvnController.updateContactByObjectId)
  .delete(PeakvnController.removeContactById);
// USER

// CURRENCY
routePeakvn
  .route('/fetch/currency-rate')
  .get(PeakvnController.fetchCurrencyRate);

// SURVEY
routePeakvn
  .route('/survey-submit')
  .get(PeakvnController.getAllSurvey)
  .post(jsonParser, PeakvnController.addNewSurvey);
routePeakvn.get("/backup-survey", PeakvnController.backupData)
// CLEAR PRODUCTLIST
routePeakvn.route('/clear-product-list/clear').get(PeakvnController.clearDB)
export default routePeakvn;
