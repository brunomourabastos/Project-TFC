import { Request, Response } from 'express';
import loginService from '../Services/loginService';

export default class LoginController {
  static async createLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await loginService.login(email, password);
      return res.status(200).json({ token: data });
    } catch (e) {
      console.log(e);
    }
  }
}
