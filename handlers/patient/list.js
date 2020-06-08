'use strict';

const connectToDatabase = require('../../db');
const { Patient } = require('../../db/models')

const list = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Patient.find()
        .then(patient => callback(null, {
          statusCode: 200,
          body: JSON.stringify(patient)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the patients.', err})
        }))
    });
};

module.exports = {
  list
};
