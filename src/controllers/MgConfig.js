import mongoose from "mongoose";

export default class MgConfig {
  static mgConnect(uri = "mongodb://peakvnadmin:peakvn123@ds147659.mlab.com:47659/peak-vn", options= {
    keepAlive: 300000,
    connectTimeoutMS: 30000,
  }) {
    mongoose.connect(uri, options);
  }
  static getTime(objectIdString) {
    return mongoose.Types.ObjectId(objectIdString);
  }
}
