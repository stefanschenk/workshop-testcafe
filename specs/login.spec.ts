import { WelcomePO } from "../pages/welcome.page";
import { User } from "../sequences/user.seq";

const welcome: WelcomePO = new WelcomePO();

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
