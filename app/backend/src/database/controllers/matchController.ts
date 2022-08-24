import { Request, Response } from 'express';
import matchService from '../Services/matchService';

export default class matchController {
  static async getInProgress(req: Request, res: Response) {
    try {
      const { inProgress } = req.query;
      if (!inProgress) {
        const allMatches = await matchService.listAll();
        return res.status(allMatches.status).json(allMatches.data);
      }
      const matchesInProgress = await matchService.inProgressMatchs(inProgress as string);
      return res.status(matchesInProgress.status).json(matchesInProgress.data);
    } catch (e) {
      console.log(e);
    }
  }

  static async saveMatch(req: Request, res: Response) {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
      const data = await matchService.saveMatch(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);
      return res.status(data.status).json(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  static async changeProgress(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await matchService.changeProgress(id);
      return res.status(data.status).json(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  static async updateResult(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      const data = await matchService.updateResult(id, homeTeamGoals, awayTeamGoals);
      return res.status(data.status).json(data.data);
    } catch (e) {
      console.log(e);
    }
  }
}
