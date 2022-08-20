import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

const JWTSECRET: jwt.Secret = 'secret';

export default class Jwt {
  static createToken(user: { email: string, password: string }) {
    const token = jwt.sign(user, process.env.JWT_SECRET || JWTSECRET, jwtConfig);
    return token;
  }
}
