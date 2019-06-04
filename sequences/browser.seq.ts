import { ClientFunction } from 'testcafe'

export class Browser {
    static getLocation = ClientFunction(() => document.location.href);

    static reload = ClientFunction(() => {
        return new Promise(resolve => {
            location.reload(true);
            resolve(true)
        });
    });
}
