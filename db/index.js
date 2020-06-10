const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //
// so .thens will work properly on handlers
let isConnected;

require('dotenv').config({path: path.resolve('.env')});
const connectionString = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PWD}@cluster0-txkes.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect(connectionString)
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};

const closeConnection = () => {
  isConnected = false
  return mongoose.disconnect()
};

module.exports = {
  connectToDatabase,
  closeConnection
};
