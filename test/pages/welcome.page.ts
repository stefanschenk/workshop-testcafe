import { Selector } from "testcafe";

export class WelcomePage {
  public self: Selector;

  /**
   * This is just the root component.
   * Are there more components on the page to add to this PO?
   * Which elements can you 'find' on this Selector.
   */
  constructor() {
    this.self = Selector("#welcome-segment");
  }
}
