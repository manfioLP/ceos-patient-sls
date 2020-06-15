const mongoose = require('mongoose');
const { fracture } = require('../errors');

// TODO: verify need of Data (em numeral): digitar (xx/xx/xxxx)
const PatientSchema = new mongoose.Schema({
  gustillo: {
    type: String,
    enum: ['1', '2', '3', 'N/A'],
    default: 'N/A',
    trim: true
  },
  ao: {
    type: String,
    enum: ['A', 'B', 'C', 'N/A'],
    default: 'N/A',
    trim: true
  },
  recordNumber: {
    type: String,
    required: [true, fracture.RECORD_NUMBER_REQUIRED],
    trim: true
  },
  description: {
    type: String,
    default: 'N/A',
    trim: true
  },
  limb: {
    type: String,
    default: 'N/A',
    trim: true
  },
  bone: {
    type: String,
    default: 'N/A',
    trim: true
  },
  region: {
    type: String,
    default: 'N/A',
    trim: true
  },
  mechanism: {
    type: String,
    default: 'N/A',
    trim: true
  },
  associatedTraumaInjury: {
    kind: {
      type: String,
      required: [true, fracture.TRAUMA_KIND_REQUIRED],
      trim: true
    },
    description: {
      type: String,
    }
  },
  firstSurgicalApproach: {
    type: String,
    default: 'N/A',
    trim: true
  },
  amputation: {
    type: Boolean
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, fracture.PATIENT_REQUIRED]
  }
}, { timestamps: true });
module.exports = mongoose.model('Patient', PatientSchema);
