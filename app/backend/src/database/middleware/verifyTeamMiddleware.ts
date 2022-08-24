import { NextFunction, Request, Response } from 'express';
import teamService from '../Services/teamService';

export default class VerifyTeam {
  static async equalTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;
    const findHomeTeam = await teamService.getById(homeTeam);
    const findAwayTeam = await teamService.getById(awayTeam);
    if (findHomeTeam.data === null || findAwayTeam.data === null) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    next();
  }
}
