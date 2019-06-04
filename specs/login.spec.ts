import { LoginPO } from "../pages/login.page";
import { WelcomePO } from "../pages/welcome.page";
import { User } from "../sequences/user.seq";

const form: LoginPO = new LoginPO(),
  welcome: WelcomePO = new WelcomePO(),
  username: string = "mr_contacts",
  password: string = "1234Pass!";

fixture`Authenticate`.page`http://localhost:3000`;

/**
 * This testcase fails, what can you mock to make this testcase pass?
 * Don't forget to take a look at the logger contract.
 */
test("Login on the web application", async t => {
  await t
    .useRole(User.contractsUser)
    .expect(welcome.self.exists)
    .ok()
    .expect(welcome.header.innerText)
    .eql("Welcome");
});
