import Team from '../models/Teams';
import matchModel from '../models/Matches';

export default class matchService {
  static async listAll() {
    const matches = await matchModel.findAll({ include: [
      { model: Team, as: 'teamHome', attributes: ['teamName'] },
      { model: Team, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return { status: 200, data: matches };
  }

  static async inProgressMatchs(progress: string) {
    const matches = await matchModel.findAll({ where: { inProgress: progress === 'true' },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return { status: 200, data: matches };
  }

  static async saveMatch(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const createdMatch = await matchModel.create({ homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true });
    return { status: 201, data: createdMatch };
  }

  static async changeProgress(id: string) {
    await matchModel.update({ inProgress: false }, { where: { id } });
    return { status: 200, data: { message: 'Finished' } };
  }
}
