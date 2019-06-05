
import { LoginPO } from '../pages/login.page'
import { WelcomePO } from '../pages/welcome.page'

const login: LoginPO = new LoginPO(),
    welcome: WelcomePO = new WelcomePO(),
    username: string = 'mr_contacts',
    password: string = '1234Pass!';

fixture`Authenticate`
    .page`http://localhost:3000`;

test('Login as mr contacts and verify "Welcome" header', async t => {
    await t
        /**
         * Create a test that logs in with the given username and password above.
         * Use the LoginPO class to find and interact with elements in the login segment of the page.
         * 
         * The assertion of a succesfull login is already given.
         */
        .expect(welcome.header.innerText).eql('Welcome');
});
