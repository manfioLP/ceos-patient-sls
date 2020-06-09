const create = require('../handlers/patient/create');

const reqBody = {
  name: 'Test Patient1',
  age: 25,
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
  otherComorbidities: 'teste comorbity',
  has: false,
  city: 'Florianópolis',
  civilStatus: 'Casado',
  profession: 'Motoboy',
  associatedTraumaInjury: [{
    kind: 'exposta',
    bone: 'tibia'
  }],
  antibioticAtEmergency: 'amoxicilina',
  exposureTime: 5.5,
  hospitalizationAverageTime: 40
}

test('Create', () => {
  test('Default day and month', () => {
    // to include keys...
    expect(create(reqBody)).
  });

  reqBody.month = 'january';
  reqBody.weekday = 'tuesday';
  reqBody.name= reqBody.name + 2
  test('Inform day and month', () => {
    // to include keys...
    expect(create(reqBody)).
  });

  reqBody.associatedTraumaInjury.push({kind: 'second trauma'})
  test('with extra associated trauma', () => {
    // to include keys...
    expect(create(reqBody)).
  })
});
