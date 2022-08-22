import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import { userMock, userMockLogin, invalidUserMockLogin, wrongUserMockLogin } from './mocks/userMock';
import User from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testar rota /login', () => {

  beforeEach(() => {
    sinon.stub(User, 'findOne').resolves(userMock as User)
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Se ao usar login e senha retorna objeto', async () => {
    const response = await chai.request(app).post('/login').send(userMockLogin);
    expect(response).to.be.an('object')
  })

  it('Se ao usar login e senha retorna status 200', async () =>{
    const response = await chai.request(app).post('/login').send(userMockLogin);
    expect(response.status).to.equal(200)
  })

  it('Se ao usar login e senha corretos, retorna um token', async () => {
    const response = await chai.request(app).post('/login').send(userMockLogin);
    expect(response.body).to.haveOwnProperty('token')
  })

  it('Se ao não usar login e senha retorna status 400', async () => {
    const response = await chai.request(app).post('/login').send(invalidUserMockLogin);
    expect(response.status).to.equal(400)
  })

  it('Se ao usar login e senha incorretos, retorna status 401', async () => {
    const response = await chai.request(app).post('/login').send(wrongUserMockLogin)
  })

});
