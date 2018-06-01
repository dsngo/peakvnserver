import express from 'express';
import MgConfig from './controllers/MgConfig';
import { customCORS } from './controllers/headerController';
import routePeakvn from './routes/routePeakvn';
// import peakvnController from './controllers/peakvnController';
import { ProductModel } from './models/Peakvn';
const products = require('../productList.json');

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '0.0.0.0';
const LOG = () =>
  console.log(`Server is listening... ${IP || 'localhost'}:${PORT}`); // tslint:disable-line

const app = express();
MgConfig.mgConnect();
app.use(customCORS);

// USE ROUTES
// peakvnController.clearDB()
// console.log(products[0])
// products.map(e => ProductModel.create(e));

app.use('/peak-vn/ecsite', routePeakvn);

app.get('/', (rq, rs) =>
  rs.send(
    'This is a node JS server for api fetching. Nothing too interesting here. If you are interest go to fb.com/DanielDNgo. PS: Im coool!',
  ),
);
console.log(PORT, process.env.PORT);
console.log(IP, process.env.IP);

app.listen(PORT, IP, LOG);
