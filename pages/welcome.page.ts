import { Selector } from 'testcafe';

export class WelcomePO {
    self: Selector;
    constructor() {
        this.self = Selector('#welcome-segment');
    }

    get header() {
        return this.self.find('h2');
    }
}
