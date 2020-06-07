const mongoose = require('mongoose');
// TODO: add validators

// Currently only schema properties are accepted, but there are no error msg when other properties are sent.
// if a property is not sent, it will not exist until update with it
const PatientSchema = new mongoose.Schema({
  // TODO: fill properties
  name: String,
  age: Number
});
module.exports = mongoose.model('Patient', PatientSchema);
