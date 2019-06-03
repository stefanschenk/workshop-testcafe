import { Role } from 'testcafe';
import { LoginPO } from '../pages/login.page';

const form: LoginPO = new LoginPO();

export class User {
    static contractsUser = Role('http://localhost:3000/login', async t => {
        const username: string = 'mr_contacts',
            password: string = '1234Pass!';

        await t
            .typeText(form.usernameInput, username, { replace: true, paste: true })
            .typeText(form.passwordInput, password, { replace: true, paste: true })
            .click(form.submitButton);
    });

}
