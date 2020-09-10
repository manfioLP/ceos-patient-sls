'use strict';

const { connectToDatabase } = require('../../db');
const { Patient } = require('../../db/models');

const get = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log('performing operation [get] , req path params: ', event.pathParameters.id)

  connectToDatabase()
    .then(() => {
      Patient.findById(event.pathParameters.id)
        .then(patient => callback(null, {
          statusCode: 200,
          body: JSON.stringify(patient),
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          }
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
