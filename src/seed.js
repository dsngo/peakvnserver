import { ProductModel } from './models/Peakvn';
const products = require('../productList.json');

async function seedDB() {
  await ProductModel.remove({});
  products.forEach(e => ProductModel.create(e));
}
export default seedDB
