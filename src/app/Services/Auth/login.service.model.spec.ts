import { LoginModel as  LoginService } from './login.service.model';

describe('Login.Service', () => {
  it('should create an instance', () => {
    expect(new LoginService()).toBeTruthy();
  });
});
