/**
 * An example json to return
 */
export const mockJson = {
  key: "value",
  otherKey: "other value"
};

/**
 * An example json to return from a function
 * accepting parameters
 */
export const mockJsonWithParams = (valueAsParam, somethingElse) => {
  return {
    key: valueAsParam,
    anotherKey: "another value",
    list: [
      {
        item: somethingElse
      }
    ]
  };
};
