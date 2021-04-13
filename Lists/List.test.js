const List = require("./List");

describe("data structure : List ", () => {
  test("List must be a Class", () => {
    expect(new List()).toBeInstanceOf(List);
  });
});
