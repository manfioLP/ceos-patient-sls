'use strict';

const { connectToDatabase } = require('../../db');
const { Patient } = require('../../db/models');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Patient.create(JSON.parse(event.body))
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
          body: JSON.stringify({msg:'Could not create the patient.', err})
        }));
    });
};
