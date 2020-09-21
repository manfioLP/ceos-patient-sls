'use strict'

const { connectToDatabase } = require('../../db');
const { Patient } = require('../../db/models');

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log('performing operation [put] , req path params: ', event.pathParameters.id);
  console.log('req body...', event.body);

  connectToDatabase()
    .then(() => {
      Patient.findOneAndUpdate(
        {identifier: event.pathParameters.id},
        JSON.parse(event.body),
        { new: true, runValidators: true  })
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
