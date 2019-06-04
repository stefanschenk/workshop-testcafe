import { RequestHook, RequestMock } from "testcafe";

/**
 * With a RequestMock you can send you own response to a request
 * done to a specific url with a specific method
 */
export const requestMock = RequestMock()
  .onRequestTo({ url: "", method: "" })
  .respond(null, 200);

/**
 * You can also write your own RequestHook class.
 * This class expects a constructor, an onRequest method and an onResponse method
 *
 * An advantage of writing a RequestHook is that you can add your own parameters or methods
 * within this class to act with on the request or response.
 */
export class requestHook extends RequestHook {
  constructor() {
    super([{ url: "", method: "" }]);
  }

  async onRequest(e: Object) {}

  async onResponse(e: Object) {}
}
