import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Team from '../database/models/Teams';
import { teamMock, teamMockId } from '../tests/mocks/teamMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testar rota /teams', () => {

  beforeEach(() => {
    sinon.stub(Team, 'findAll').resolves(teamMock as Team[]);
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Se ao fazer requisição na rota /teams, retorna status 200', async () => {
    const response = await chai.request(app).get('/teams').send()
    expect(response.status).to.equal(200)
  });
});

describe('Testar rota /teams/:id', () => {
  beforeEach(() =>{
    sinon.stub(Team, 'findByPk').resolves(teamMockId as Team);
  })

  afterEach(() => {
    sinon.restore()
  })

  it('Se ao fazer requisição na rota /teams/:id, retorna o id informado no parâmetro', async () => {
    const response = await chai.request(app).get('/teams/1').send()
    expect(response.body.id).to.equal(1)
  })

  it('Se ao fazer requisição na rota /teams/:id, retorna status 200', async () => {
    const response = await chai.request(app).get('/teams/:id').send()
    expect(response.status).to.equal(200)
  })
})
