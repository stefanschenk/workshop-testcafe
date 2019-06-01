import { Role } from "testcafe";
import { LoginPage } from "../pages/login.page";

const pageUrl = "http://localhost:3000";

const loginPage = new LoginPage();

const mrContacts = Role(pageUrl, async t => {
  await t
    .typeText(loginPage.username, "mr_contacts")
    .typeText(loginPage.password, "1234Pass!")
    .click(loginPage.login);
});

fixture``.page(pageUrl);

test("Login on the web application", async t => {
  await t.useRole(mrContacts);
});
