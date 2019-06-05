import { ContactsPO } from '../pages/contacts.page'
import { User } from '../sequences/user.seq';
import { Browser } from '../sequences/browser.seq';

const contacts: ContactsPO = new ContactsPO();

fixture`Contacts`
    .page`http://localhost:3000/contacts`
    .beforeEach(async t => {
        await t
            /**
             * The login is covered by using a Role in Testcafe.
             * Take a look at user.seq.ts to find out how that works.
             */
            .useRole(User.contractsUser)
            /**
             * As explained during the presentation, testcafe supports interaction with the browser.
             * For this, ClientFunctions are used.
             * 
             * The ClientFunction {@link Browser.getLocation()} returns an empty string for now.
             * Adjust the function so that it can fetch the current URL.
             */
            .expect(await Browser.getLocation()).contains('contacts');
    });

test('Create a new contact with name and e-mail', async t => {
    await t
        /**
         * Use the ContactsPO class to find and interact with elements in the contacts segment of the page.
         *
         * The assertion of a succesfull creation is already given.
         */
        .expect(contacts.successMessage).eql('Contact Saved');
});

test('Update newly created contact with a new phone number', async t => {
    await t
        /**
         * Use the ContactsPO class to find and interact with elements in the contacts segment of the page.
         *
         * The assertion of a succesfull update is already given.
         */
        .expect(contacts.successMessage).eql('Contact Updated');
});

test('Delete newly created contact', async t => {
    await t
        /**
         * Use the ContactsPO class to find and interact with elements in the contacts segment of the page.
         *
         * The assertion of a succesfull deletion is already given.
         */
        .expect(contacts.successMessage).eql('Contact Removed');
});
