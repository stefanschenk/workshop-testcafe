import { Selector } from 'testcafe';

class ContactsFromPO {
    /**
     * Create a page object for the contacts form segment.
     */
}

export class ContactsPO {
    self: Selector;
    constructor() {
        this.self = Selector('#contact-form');
    }
    
    /**
     * Create a page object for the contacts segment.
     * Note that the contactsForm initiates a seperate class for the form
     * 
     * Make sure to use this method:
     * 
     * get contactsFrom() {
     *     return new ContactsFromPO(this.self.find('form.ui.form'));
     * }
     */

    get successMessage() {
        return this.self.find('.ui.success.message .header').innerText;
    }
}
