import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Match from '../database/models/Matches';
import {matchesMock} from './mocks/matchesMock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testar rota /matches', () => {

  beforeEach(() => sinon.stub(Match, 'findAll').resolves(matchesMock as unknown as Match[]))

  afterEach(() => {
    sinon.restore()
  })

  it('Se ao fizer requisição na rota /matches, retorna status 200', async () => {
    const response = await chai.request(app).get('/matches').send()
    expect(response.status).to.equal(200)
  });


  });
