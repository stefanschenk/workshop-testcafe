import { Selector } from 'testcafe';

class ContactsFromPO {
    self: Selector;
    constructor(selector: Selector) {
        this.self = selector;
    }

    get firstNameInput() {
        return this.self.find('input[name=firstName]');
    }

    get lastNameInput() {
        return this.self.find('input[name=lastName]');
    }

    get phoneInput() {
        return this.self.find('input[name=phone]');
    }

    get emailInput() {
        return this.self.find('input[name=email]');
    }

    get streetAddressInput() {
        return this.self.find('input[name=addressStreet]');
    }

    get addressPostcodeInput() {
        return this.self.find('input[name=addressPostcode]');
    }

    get saveButton() {
        return this.self.find('button[value=Save]');
    }

    get deleteButton() {
        return this.self.find('button[value=Delete]');
    }
}

export class ContactsPO {
    self: Selector;
    constructor() {
        this.self = Selector('#contact-form');
    }

    get contactsSelect() {
        return this.self.find('select.ui.search.dropdown');
    }

    get contactsFrom() {
        return new ContactsFromPO(this.self.find('form.ui.form'));
    }

    get successMessage() {
        return this.self.find('.ui.success.message .header').innerText;
    }
}
