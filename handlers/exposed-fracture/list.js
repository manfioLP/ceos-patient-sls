'use strict';

const { connectToDatabase } = require('../../db');
const { ExposedFracture } = require('../../db/models');

const list = (event, context, callback) => {
  // TODO: add pagination
  // TODO: add filters
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      ExposedFracture.find()
        .then(fracture => callback(null, {
          statusCode: 200,
          body: JSON.stringify(fracture)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the fractures.', err})
        }))
    });
};

module.exports = {
  list
};
