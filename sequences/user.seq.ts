import { Role } from 'testcafe';
import { LoginPO } from '../pages/login.page';

const form: LoginPO = new LoginPO();

export class User {
    static contractsUser = Role('', async t => {});
}
