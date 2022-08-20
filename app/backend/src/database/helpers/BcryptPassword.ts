import * as bcrypt from 'bcryptjs';

export default class PasswordEncrypt {
  static async verifyPassword(userPassword: string, dbPassword: string) {
    const compare = await bcrypt.compare(userPassword, dbPassword);
    return compare;
  }
}
