'use strict';

const { connectToDatabase } = require('../../db');
const { Patient } = require('../../db/models');

const list = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const {page=1, limit=10, skip=page*limit, lm=+limit} = { ...event.queryStringParameters }

  connectToDatabase()
    .then(() => {
      Patient.find().limit(lm).skip(skip)
        .then(patients => {
          const response = {
            page,
            perPage: limit,
            data: patients
          }
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(response),
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            }
          })
        })
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
