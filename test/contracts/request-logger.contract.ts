import { RequestLogger } from "testcafe";

/**
 * This requestLogger logs all requests to url's containing 'localhost:3000'
 * This would be the same as ReguestLogger(new Regexp('localhost:3000'))
 *
 * What would you need to expose the headers and body of the request and/or
 * response (see: https://devexpress.github.io/testcafe/documentation/test-api/intercepting-http-requests/logging-http-requests.html)
 */
export const requestLogger = RequestLogger(/localhost:3000/);
