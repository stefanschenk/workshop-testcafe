
import { LoginPO } from '../pages/login.page'
import { WelcomePO } from '../pages/welcome.page'

const form: LoginPO = new LoginPO(),
    welcome: WelcomePO = new WelcomePO(),
    username: string = 'mr_contacts',
    password: string = '1234Pass!';

fixture`Authenticate`
    .page`http://localhost:3000`;

test('Login as mr contacts and verify "Welcome" header', async t => {
    await t
        .typeText(form.usernameInput, username)
        .typeText(form.passwordInput, password)
        .click(form.submitButton)
        .expect(welcome.header.innerText).eql('Welcome');
});
