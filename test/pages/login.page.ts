import { Selector } from "testcafe";

export class LoginPage {
  public self: Selector;

  constructor() {
    this.self = Selector("#login-segment");
  }

  get username() {
    return this.self.find('input[name="username"]');
  }

  get password() {
    return this.self.find('input[name="password"]');
  }

  get login() {
    return this.self.find("div.button").withExactText("Login");
  }
}
