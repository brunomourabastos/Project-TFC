import { Request, Response } from 'express';
import teamService from '../Services/teamService';

export default class teamController {
  static async getAll(_req: Request, res: Response) {
    try {
      const allTeams = await teamService.getAll();
      return res.status(allTeams.status).json(allTeams.data);
    } catch (e) {
      console.log(e);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const team = await teamService.getById(id as string);
      return res.status(team.status).json(team.data);
    } catch (e) {
      console.log(e);
    }
  }
}
