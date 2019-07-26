import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });

  it('should create object with userdefined values', () =>  {
      let login :Login = new Login({"userName": "apu","password":"apu" });
      expect(login.userName).toEqual("apu");
      expect(login.password).toEqual("apu");
      expect(login.password).toEqual("apu1");
      expect(login).toBeTruthy();
  });
});
