const { list, List } = require("./List");

describe("data structure : List ", () => {
  beforeEach(() => {
    delete list.data;
    return (list.data = []);
  });

  it("list must be an instance of Class List", () => {
    expect(list).toBeInstanceOf(List);
  });

  it("data property must be an Array", () => {
    expect(list.data).toEqual(expect.any(Array));
  });

  it("data property must be an empty Array on first instance", () => {
    expect(list.data).toHaveLength(0);
  });

  it(".length and .position properties must be a Number", () => {
    expect(list.length).toEqual(expect.any(Number));
    expect(list.position).toEqual(expect.any(Number));
  });
});
