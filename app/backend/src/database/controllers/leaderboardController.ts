import { Request, Response } from 'express';
import teamService from '../Services/teamService';

export default class leaderboardController {
  static async getAll(_req: Request, res: Response) {
    try {
      const allTeams = await teamService.getAll();
      return res.status(allTeams.status).json(allTeams.data);
    } catch (e) {
      console.log(e);
    }
  }
}
