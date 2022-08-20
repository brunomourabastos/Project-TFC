import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IUser } from '../database/interfaces/IUser';

dotenv.config();

export default class JwtService {
  static sign(payload: { id: number, email: string }): string {
    return jwt.sign(payload, 'SECRET');
  }
}
