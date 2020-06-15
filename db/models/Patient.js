const mongoose = require('mongoose');
// const { patientErrors } = require('../errors');
const { defaultWeekday, defaultMonth } = require('../helper');
const {educationLevels, genders, weekdays, patientCities, civilStatus} = require('../../constants');

// TODO: verify need of Data (em numeral): digitar (xx/xx/xxxx)
// TODO: verify need of Horário de admissão: digitar
const PatientSchema = new mongoose.Schema({
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
    enum: genders,
    default: 'N/A',
    trim: true
  },
  education: {
    type: String,
    enum: educationLevels,
    default: 'N/A',
    trim: true
  },
  educationCompleted: {
    type: Boolean,
  },
  diabetes: {
    type: Boolean,
    // type: Boolean | String,
    // default: 'N/A'
  },
  smoker: {
    type: Boolean,
    // default: 'N/A'
  },
  ethylista: {
    type: Boolean,
    // default: 'N/A'
  },
  infection: {
    type: Boolean,
    // default: 'N/A'
  },
  amputation: {
    type: Boolean,
    // default: 'N/A'
  },
  // TODO: verify comorbidities and otherComorbidities
  comorbidities: {
    type: Boolean,
    // default: 'N/A',
    // trim: true
  },
  otherComorbidities: {
    type: String,
    // default: 'N/A'
  },
  has: {
    type: Boolean,
    // default: 'N/A',
  },
  city: {
    type: String,
    enum: patientCities,
    default: 'N/A',
    trim: true
  },
  civilStatus: {
    type: String,
    enum: civilStatus,
    trim: true
  },
  profession: {
    type: String,
    default: 'N/A',
    trim: true
  },
  // TODO: remove _id from associatedTraumaInjury
  associatedTraumaInjury: [{
    kind: {
      type: String,
      required: true,
      trim: true
    },
    bone: {
      type: String,
    }
  }],
  antibioticAtEmergency: {
    type: String,
    default: 'N/A',
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
  fractures: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'ExposedFracture'
  }]
}, { timestamps: true });
module.exports = mongoose.model('Patient', PatientSchema);
