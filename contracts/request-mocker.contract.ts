import { readFileSync } from "fs";
import { mockJson, mockJsonWithParams } from "./content/mock-response";
import { RequestHook, RequestMock } from "testcafe";

/**
 * This is an example of reading a javascript file from the content
 * directory to be able to use it as a response in a RequestMock
 */
const keycloakJs = readFileSync(__dirname + "/content/fake-auth.js", "utf8");

/**
 * With a RequestMock you can send you own response to a request
 * done to a specific url with a specific method
 *
 * In this example the body is null
 * but you could return a json, a string, content from a javascript file. That's up to you.
 * And you can write the body in this method, or import it from the content directory.
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
