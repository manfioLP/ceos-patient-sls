const mongoose = require('mongoose');
const { defaultWeekday, defaultMonth } = require('../helper');

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
    // enum: weekdays,
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
    required: [true, 'Eh necessario informar a educacao do paciente!'],
    trim: true
  },
  death: {
    type: Boolean,
    default: false
  },
  diabetes: {
    type: Boolean,
    default: false
  },
  smoker: {
    type: Boolean,
    default: false
  },
  ethylista: {
    type: Boolean,
    default: false
  },
  comorbidities: {
    type: Boolean,
    default: false
  },
  otherComorbidities: {
    type: String,
    default: ''
    // default: 'N/I'
  },
  has: {
    type: Boolean,
    default: false
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
  associatedTraumaInjury: [{
    type: String,
    trim: true
  }],
  associatedTraumaInjuryOther: {
    type: String,
    trim: true
  },
  antibioticAtEmergency: {
    type: String,
    default: 'N/I',
    trim: true
  },
  exposureTime: {
    type: String,
    default: 'N/I'
  },
  hospitalizationAverageTime: {
    type: Number,
    default: 0
  },
  race: {
    type: String,
    default: 'N/I',
    trim: true,
  },
  admissionHour: {
    type: String,
    default: 'N/I',
    trim: true,
  },
  ageCategory: {
    type: String,
    default: 'N/I',
    trim: true
  },
  admissionHourCategory: {
    type: String,
    default: 'N/I',
    trim: true
  },
  exposureTimeCategory: {
    type: String,
    default: 'N/I',
    trim: true
  },
  associatedClosedFractureDescription: {
    type: String,
    trim: true
  }
}, { timestamps: true });
module.exports = mongoose.model('Patient', PatientSchema);
