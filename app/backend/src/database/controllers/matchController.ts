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
}
