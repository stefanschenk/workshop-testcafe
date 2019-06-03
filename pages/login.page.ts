import { Selector } from 'testcafe';

export class LoginPO {
    self: Selector;
    constructor() {
        this.self = Selector('#credentials');
    }

    get usernameInput() {
        return this.self.find('input[name=username]');
    }

    get passwordInput() {
        return this.self.find('input[name=password]');
    }

    get submitButton() {
        return this.self.find('.ui.blue.submit.button')
    }
}
