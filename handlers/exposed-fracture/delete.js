'use strict'

const { connectToDatabase } = require('../../db');
const { ExposedFracture} = require('../../db/models');

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // TODO: verify how wil be the delete method
  // TODO: add rollback from delete

  connectToDatabase()
    .then(() => {
      ExposedFracture.findByIdAndRemove(event.pathParameters.id)
        .then(fracture => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed fracture with id: ' + fracture._id, fracture })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({msg:'Could not fetch the fracture for deletion.', err})
        }));
    });
};
