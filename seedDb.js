const products = require('./productList.json');

const mongoose = require('mongoose');

const uri = 'mongodb://peakvnadmin:peakvn123@ds147659.mlab.com:47659/peak-vn';
const options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000,
};
mongoose.connect(uri, options);

async function clearDB() {
  
}
