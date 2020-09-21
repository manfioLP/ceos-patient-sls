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
    default: '',
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
    default: '',
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
    // default: ''
  },
  has: {
    type: Boolean,
    default: false
  },
  drugs: {
    type: Boolean,
    default: false
  },
  city: {
    type: String,
    required: [true, 'Precisa Obrigatoriamente informar a cidade! \n se nao sabe qual eh a cidade usa o campo Outro.'],
    trim: true
  },
  civilStatus: {
    type: String,
    required: [true, 'Precisa Obrigatoriamente informar o estado civil! \n se nao sabe qual eh a cidade usa o campo Outro.'],
    trim: true
  },
  profession: {
    type: String,
    required: [true, 'Precisa Obrigatoriamente informar a Profissao! \n se nao sabe qual eh a cidade usa o campo Outro.'],
    trim: true
  },
  associatedTraumaInjury: {
    type: String,
    trim: true
  },
  associatedTraumaInjuryOther: {
    type: String,
    trim: true
  },
  antibioticAtEmergency: {
    type: String,
    default: '',
    trim: true
  },
  antibioticAtEmergencyOther: {
    type: String,
    trim: true
  },
  exposureTime: {
    type: String,
    default: ''
  },
  hospitalizationAverageTime: {
    type: Number,
    default: 0
  },
  race: {
    type: String,
    default: '',
    trim: true,
  },
  traumaHour: {
    type: String,
    required: [true, 'Horario do trauma eh obrigatorio!'],
    trim: true,
  },
  ageCategory: {
    type: String,
    default: '',
    trim: true
  },
  traumaHourCategory: {
    type: String,
    trim: true,
    required: [true, 'Horario do trauma eh obrigatorio!'],
  },
  exposureTimeCategory: {
    type: String,
    default: '',
    trim: true
  },
  associatedClosedFractureDescription: {
    type: String,
    trim: true
  },
  complications: {
    type: String,
    trim: true
  },
  fracturesNumber: {
    type: String
  },
  admissionHourCC: {
    type: String,
    required: [true, 'Tempo de admissao CC eh obrigatorio!'],
    trim: true
  },
  admissionHourCCCategory: {
    type: String,
    required: [true, 'Categorizar Tempo de admissao CC eh obrigatorio!'],
    trim: true
  }
}, { timestamps: true });
module.exports = mongoose.model('Patient', PatientSchema);
