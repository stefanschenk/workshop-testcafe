import { Selector } from 'testcafe';

export class ContactsPO {
    self: Selector;
    constructor() {
        this.self = Selector('#contact-form');
    }
    
    /**
     * Create a page object for the contacts segment.
     * Note that the contactsForm initiates a seperate class for the form.
     */

    get successMessage() {
        return this.self.find('.ui.success.message .header').innerText;
    }
}
