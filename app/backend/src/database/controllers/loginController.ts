import { Request, Response } from 'express';
import loginService from '../Services/loginService';

export default class LoginController {
  static async createLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await loginService.login(email, password);
      return res.status(data.status).json(data.message);
    } catch (e) {
      console.log(e);
    }
  }

  static async validateToken(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const data = await loginService.tokenAuth(token as string);
      res.status(200).send({ role: data });
    } catch (e) {
      console.log(e);
    }
  }
}
