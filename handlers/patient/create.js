'use strict';

const connectToDatabase = require('../../db');
const { Patient }= require('../../models');

const create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Patient.create(JSON.parse(event.body))
        .then(patient => callback(null, {
          statusCode: 200,
          body: JSON.stringify(patient)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the patient.'
        }));
    });
};

module.exports = {
  create
};
