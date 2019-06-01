import { ClientFunction } from "testcafe";

export class Browser {
  static getLocation = ClientFunction(() => document.location.href);
}
