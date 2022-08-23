import teamModel from '../models/Teams';

export default class teamService {
  static async getAll() {
    const allTeams = await teamModel.findAll();
    return { status: 200, data: allTeams };
  }

  static async getById(id: string) {
    const team = await teamModel.findByPk(id);
    return { status: 200, data: team };
  }
}
