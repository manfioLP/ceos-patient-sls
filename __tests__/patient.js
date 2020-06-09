const create = require('../handlers/patient/create');

const body = {
  name: 'Test Patient',
  age: 0,
  recordNumber: '123456',
  month: 'january',
  weekday: 'tuesday',
  gender: 'male',
  education: 'pos-grad',
  educationCompleted: true,
  diabetes: false,
  smoker: true,
  ethylista: false,
  infection: true,
  amputation: false,
  comorbidities: true,
  otherComorbidities: '',
  has: false,
  city: '',
  civilStatus: '',
  profession: '',
  associatedTraumaInjury: [{
    kind: 'exposta',
    bone: 'tibia'
  }],
  antibioticAtEmergency: '',
  exposureTime: 5.5,
  hospitalizationAverageTime: 40
}

test('Create Patient', () => {
  expect(create(

  )).toBe("Hello!");

  body.month = 'january';
  body.weekday: 'tuesday';
  expect(handler.getLocalGreeting("fr")).toBe("🌊");
});
