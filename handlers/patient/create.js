'use strict';

const { connectToDatabase } = require('../../db');
const { Patient } = require('../../db/models');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const patientBody = JSON.parse(event.body);
  const date = patientBody.date;
  const identifier = `${patientBody.recordNumber}@${date}`;
  connectToDatabase()
    .then(() => {
      Patient.create({...patientBody, identifier})
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
