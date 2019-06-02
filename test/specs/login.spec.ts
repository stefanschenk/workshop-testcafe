import { Role } from "testcafe";
import { LoginPage } from "../pages/login.page";
import { WelcomePage } from "../pages/welcome.page";

const pageUrl = "http://localhost:3000";

const loginPage = new LoginPage();
const welcomePage = new WelcomePage();

const mrContacts = Role(pageUrl, async t => {
  await t
    .typeText(loginPage.username, "mr_contacts")
    .typeText(loginPage.password, "1234Pass!")
    .click(loginPage.login);
});

fixture`Login`.page(pageUrl);

/**
 * This testcase fails, what can you mock to make this testcase pass?
 * Don't forget to take a look at the logger contract.
 */
test("Login on the web application", async t => {
  await t
    .useRole(mrContacts)
    .expect(welcomePage.self.exists)
    .ok();
});
