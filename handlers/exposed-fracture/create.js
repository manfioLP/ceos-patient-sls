'use strict';

const { connectToDatabase } = require('../../db');
const { ExposedFracture } = require('../../db/models');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      ExposedFracture.create(JSON.parse(event.body))
        .then(fracture => callback(null, {
          statusCode: 200,
          body: JSON.stringify(fracture)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not create the fracture.', err})
        }));
    });
};
