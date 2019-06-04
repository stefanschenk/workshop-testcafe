import { ContactsPO } from "../pages/contacts.page";
import { User } from "../sequences/user.seq";
import { Browser } from "../sequences/browser.seq";

const contacts: ContactsPO = new ContactsPO();

/**
 * These testcases fail, what can you mock to make this testcase pass?
 * Don't forget to take a look at the logger contract.
 */
fixture`Contacts`.page`http://localhost:3000/contacts`.beforeEach(async t => {
  await t
    .useRole(User.contractsUser)
    .expect(await Browser.getLocation())
    .contains("contacts");
});

test("Create a new contact with name and e-mail", async t => {
  await t
    .typeText(contacts.contactsFrom.firstNameInput, "Jan", {
      replace: true,
      paste: true
    })
    .typeText(contacts.contactsFrom.lastNameInput, "Jansen", {
      replace: true,
      paste: true
    })
    .typeText(contacts.contactsFrom.emailInput, "Jan@Jansen.nl", {
      replace: true,
      paste: true
    })
    .click(contacts.contactsFrom.saveButton)
    .expect(contacts.successMessage)
    .eql("Contact Saved");
});

test("Update contact with a phone number newly created contact", async t => {
  await t
    .click(contacts.contactsSelect)
    .click(contacts.contactsSelect.find("option").withText("Jansen"))
    .typeText(contacts.contactsFrom.phoneInput, "0612345678", {
      replace: true,
      paste: true
    })
    .expect(contacts.successMessage)
    .eql("Contact Updated");
});

test("Delete newly created contact", async t => {
  await t
    .click(contacts.contactsSelect)
    .click(contacts.contactsSelect.find("option").withText("Jansen"))
    .click(contacts.contactsFrom.deleteButton)
    .expect(contacts.successMessage)
    .eql("Contact Removed");
});
