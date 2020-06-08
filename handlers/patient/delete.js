'use strict'

const connectToDatabase = require('../../db');
const { Patient } = require('../../db/models')

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Patient.findByIdAndRemove(event.pathParameters.id)
        .then(patient => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed patient with id: ' + patient._id, patient })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the patient.', err})
        }));
    });
};
