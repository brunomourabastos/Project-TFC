import { Request, Response } from 'express';
import matchService from '../Services/matchService';

export default class matchController {
  static async getAll(_req: Request, res: Response) {
    try {
      const allMatches = await matchService.listAll();
      return res.status(allMatches.status).json(allMatches.data);
    } catch (e) {
      console.log(e);
    }
  }
}
