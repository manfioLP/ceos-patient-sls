const {promisify} = require('util');
const lambda = require( '../handlers/patient/create');
const handler = promisify(lambda.create);

const {closeConnection} = require('../db')

// TODO: set environment for jest with mongoose

const context = {
  "awsRequestId": "ckb8j7s4q0002qjr9azyw2xmv",
  "callbackWaitsForEmptyEventLoop": true,
  "clientContext": null,
  "functionName": "ceos-server-dev-create",
  "functionVersion": "$LATEST",
  "invokedFunctionArn": "offline_invokedFunctionArn_for_ceos-server-dev-create",
  "logGroupName": "offline_logGroupName_for_ceos-server-dev-create",
  "logStreamName": "offline_logStreamName_for_ceos-server-dev-create",
  "memoryLimitInMB": "128"
}

const recordNumber = new Date().getTime();
const reqBody = {
  name: 'Test Patient1',
  age: 25,
  recordNumber: recordNumber.toString(),
  month: 'Janeiro',
  weekday: 'Quinta',
  gender: 'Masculino',
  education: 'Doutorado',
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
  civilStatus: 'Solteiro',
  profession: 'Motoboy',
  associatedTraumaInjury: 'Qualquer um ai',
  antibioticAtEmergency: 'amoxicilina',
  exposureTime: 5.5,
  hospitalizationAverageTime: 40,
  admissionDate: new Date(),
  admissionHourCC: 'teste teste',
  admissionHourCCCategory: 'teste teste',
  traumaHourCategory: 'teste teste',
  traumaHour: 'teste teste',
  fracturesNumber: 'teste teste',
}

describe('Create', () => {

  test('Default day and month', async (done) => {
    const result = await handler({body: JSON.stringify(reqBody)}, context);
    const patient = JSON.parse(result.body)
    expect(patient).toHaveProperty('age', 25)
    done();
  })

  // reqBody.month = 'january';
  // reqBody.weekday = 'tuesday';
  // reqBody.name= reqBody.name + 2
  // test('Inform day and month', () => {
  //   // to include keys...
  //   const patient = create.create(reqBody)
  //   expect(patient).toHaveProperty('age', 25)
  //   expect(patient).toHaveProperty('education', 'pos-grad')
  //   expect(patient).toHaveProperty('otherComorbidities')
  //   expect(patient.associatedTraumaInjury).toHaveLength(1)
  //   expect(patient).toHaveProperty('month', 'january')
  //   expect(patient).toHaveProperty('weekday', 'tuesday')
  // });
  //
  // reqBody.associatedTraumaInjury.push({kind: 'second trauma'})
  // test('with extra associated trauma', () => {
  //   const patient = create.create(reqBody)
  //   // to include keys...
  //   expect(patient).associatedTraumaInjury.toHaveLength(2)
  // });

  afterAll(done => {
    closeConnection();
    done();
  })
});
