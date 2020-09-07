function getImportPath(file) {
  return `./${process.env.LOCALE}/${file}`
}


//      DYNAMIC IMPORT     //
// let weekdays, educationLevels, genders, patientCities, months, civilStatus;
// weekdays = educationLevels = genders = patientCities = months = civilStatus = [];

// import(getImportPath('weekdays'))
//   .then(module => weekdays = module);
//
// import(getImportPath('educationLevels'))
//   .then(module => educationLevels = module);
//
// import(getImportPath('genders'))
//   .then(module => genders = module);
//
// import(getImportPath('patientCities'))
//   .then(module => patientCities = module);
//
// import(getImportPath('months'))
//   .then(module => months = module);
//
// import(getImportPath('civilStatus'))
//   .then(module => civilStatus = module);


const educationLevels = require(getImportPath('educationLevels'))
const weekdays = require(getImportPath('weekdays'))
const genders = require(getImportPath('genders'))
const months = require(getImportPath('months'))
const civilStatus = require(getImportPath('civilStatus'))
const race = require(getImportPath('race'))


//      STATIC IMPORT      //
// import educationLevels from './en-US/educationLevels'
// import genders from './en-US/genders'
// import patientCities from './en-US/patientCities'
// import months from './en-US/months'
// import civilStatus from './en-US/civilStatus'

module.exports = {
  weekdays,
  educationLevels,
  genders,
  months,
  civilStatus,
  race
};
