import teamModel from '../models/Teams';

export default class leaderboardService {
  static async getAll() {
    const allTeams = await teamModel.findAll();
    return { status: 200, data: allTeams };
  }
}
