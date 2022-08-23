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
}
