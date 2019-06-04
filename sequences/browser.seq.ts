import { ClientFunction } from "testcafe";

export class Browser {
  /**
   * This method utilizes 'ClientFunction'
   * With a ClientFunction you can execute javascript code within the browser.
   * Obtaining info from the browser not obtainable by standard testcafe functions.
   *
   * You can also use it to override methods on the window object...
   * if you get warning about window in a ClientFunction, use
   * (window as any) to prevent this
   */
  static getLocation = ClientFunction(() => document.location.href);

  static reload = ClientFunction(() => {
    return new Promise(resolve => {
      location.reload(true);
      resolve(true);
    });
  });
}
