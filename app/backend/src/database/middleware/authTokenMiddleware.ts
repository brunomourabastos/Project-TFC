import { NextFunction, Request, Response } from 'express';
import Jwt from '../helpers/Token';

export default class AuthToken {
  static async authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token must be a valid token' });
    try {
      Jwt.validateToken(token);
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
