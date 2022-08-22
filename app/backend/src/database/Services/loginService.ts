import userModel from '../models/User';
import BcryptPassword from '../helpers/BcryptPassword';
import Jwt from '../helpers/Token';
import { IData } from '../interfaces/IData';

export default class LoginService {
  static async login(email: string, password: string) {
    if (!email || !password) {
      return { status: 400, message: { message: 'All fields must be filled' } };
    }

    const user = await userModel.findOne({ where: { email } });
    if (!user) {
      return { status: 401, message: { message: 'Incorrect email or password' } };
    }
    const dbPassword = user.password;
    const verifyPassword = await BcryptPassword.verifyPassword(password, dbPassword);
    if (!verifyPassword) {
      return { status: 401, message: { message: 'Incorrect email or password' } };
    }
    const token = Jwt.createToken({ email, password });

    return { status: 200, message: { token } };
  }

  static async tokenAuth(token: string) {
    const data = Jwt.validateToken(token) as IData;
    const user = await userModel.findOne({ where: { email: data.email } }) as userModel;
    console.log('estou aqui **********************************', user);
    return user.role;
  }
}
