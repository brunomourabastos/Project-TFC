import { Request, Response } from 'express';
import leaderboardService from '../Services/leaderboardService';

export default class LeaderboardController {
  static async getAll(_req: Request, res: Response) {
    try {
      const allTeams = await leaderboardService.orderLeaderBoard();
      return res.status(allTeams.status).json(allTeams.data);
    } catch (e) {
      console.log(e);
    }
  }
}
