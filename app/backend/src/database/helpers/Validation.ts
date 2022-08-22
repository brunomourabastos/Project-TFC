export default class Validation {
  static email(email: string): boolean | object {
    if (email === '' || email === null) {
      return { status: 400, message: 'All fields must be filled' };
    }
    return true;
  }

  static password(password:string): boolean | object {
    console.log('estou aqui, dentro da validação password');
    if (password === '' || password === null) {
      return { status: 400, message: 'All fields must be filled' };
    }
    return true;
  }
}
