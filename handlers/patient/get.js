'use strict';

const connectToDatabase = require('../../db');
const { Patient } = require('../../db/models')

const get = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Patient.findById(event.pathParameters.id)
        .then(patient => callback(null, {
          statusCode: 200,
          body: JSON.stringify(patient)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the patient.', err})
        }));
    });
};

module.exports = {
  get
};
