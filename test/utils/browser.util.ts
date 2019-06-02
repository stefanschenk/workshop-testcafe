import { ClientFunction } from "testcafe";

export class Browser {
  /**
   * This method utilizes 'ClientFunction'
   * With a ClientFunction you can execute javascript code within the browser.
   * Obtaining info from the browser not obtainable by standard testcafe functions.
   *
   * You can also use it to override methods on the window object...
   */
  static getLocation = ClientFunction(() => document.location.href);
}
