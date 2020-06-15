'use strict';

const { connectToDatabase } = require('../../db');
const { ExposedFracture } = require('../../db/models');

const get = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      ExposedFracture.findById(event.pathParameters.id)
        .then(fracture => callback(null, {
          statusCode: 200,
          body: JSON.stringify(fracture)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the fracture.', err})
        }));
    });
};

module.exports = {
  get
};
