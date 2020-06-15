'use strict'

const { connectToDatabase } = require('../../db');
const { ExposedFracture } = require('../../db/models');

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      ExposedFracture.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(fracture => callback(null, {
          statusCode: 200,
          body: JSON.stringify(fracture)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the fracture for update.', err})
        }));
    });
};
