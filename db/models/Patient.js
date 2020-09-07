const mongoose = require('mongoose');
// const { patientErrors } = require('../errors');
const { defaultWeekday, defaultMonth } = require('../helper');
const {educationLevels, genders, weekdays, race} = require('../../constants');

// TODO: verify need of Data (em numeral): digitar (xx/xx/xxxx)
// TODO: verify need of Horário de admissão: digitar
const PatientSchema = new mongoose.Schema({
  admissionDate: {
    type: Date,
    required: [true, 'Data de internacao eh obrigatoria!']
  },
  identifier: {
    type: String,
    trim: true,
    required: [true, 'identifier is required, if you are reading this it\'s likely a error on setting body of server create lambda'],
    unique: true
  },
  name: {
    type: String,
    default: 'N/A',
    trim: true
  },
  age: {
    type: Number,
    default: 0
  },
  recordNumber: {
    type: String,
    required: true,
    trim: true
  },
  month: {
    type: String,
    default: defaultMonth(new Date().getMonth()),
    trim: true
  },
  weekday: {
    type: String,
    enum: weekdays,
    default: defaultWeekday(new Date().getDay()),
    trim: true
  },
  gender: {
    type: String,
    default: 'N/I',
    trim: true
  },
  education: {
    type: String,
    enum: educationLevels,
    trim: true
  },
  educationCompleted: {
    type: Boolean,
  },
  diabetes: {
    type: Boolean,
    // type: Boolean | String,
    // default: 'N/I'
  },
  smoker: {
    type: Boolean,
    // default: 'N/I'
  },
  ethylista: {
    type: Boolean,
    // default: 'N/I'
  },
  comorbidities: {
    type: Boolean,
    // default: 'N/I',
    // trim: true
  },
  otherComorbidities: {
    type: String,
    // default: 'N/I'
  },
  has: {
    type: Boolean,
    // default: 'N/I',
  },
  city: {
    type: String,
    default: 'N/I',
    trim: true
  },
  civilStatus: {
    type: String,
    default: 'N/I',
    trim: true
  },
  profession: {
    type: String,
    default: 'N/I',
    trim: true
  },
  // TODO: remove _id from associatedTraumaInjury
  associatedTraumaInjury: {
    type: String,
    default: 'N/I',
    trim: true
  },
  antibioticAtEmergency: {
    type: String,
    default: 'N/I',
    trim: true
  },
  exposureTime: {
    type: Number,
    default:0
  },
  hospitalizationAverageTime: {
    type: Number,
    default: 0
  },
  race: {
    type: String,
    default: 'N/I',
    trim: true,
    enum: race
  }
}, { timestamps: true });
module.exports = mongoose.model('Patient', PatientSchema);
