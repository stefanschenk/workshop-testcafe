import { Selector } from "testcafe";
/**
 * Create a test to click the 'sign up' button on the front page.
 * And handle the result so the test does not fail.
 */

fixture`signup`.page("http://localhost:3000");

test("sign me up", async t => {
  console.log(await Selector("i").innerText);
  //   await t.setNativeDialogHandler(() => true).click("i.signup");
});
