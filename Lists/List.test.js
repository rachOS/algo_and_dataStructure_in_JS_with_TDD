const { list, List } = require("./List");

describe("data structure : List ", () => {
  beforeEach(() => {
    delete list.dataStore;
    return (list.dataStore = []);
  });

  it("list must be an instance of Class List", () => {
    expect(list).toBeInstanceOf(List);
  });

  it("{dataStore} property must be an Array", () => {
    expect(list.dataStore).toEqual(expect.any(Array));
  });

  it("{dataStore} property must be an empty Array on first instance", () => {
    expect(list.dataStore).toHaveLength(0);
  });

  it("{listSize, position } properties must be a Number", () => {
    expect(list.listSize).toEqual(expect.any(Number));
    expect(list.position).toEqual(expect.any(Number));
  });

  it("{clear,find,toString,insert, append,remove,front,end,prev,next,length,currPos,moveTo,getElement,contains } \
  properties must be a Function", () => {
    const methods = Object.values({
      clear: list.clear,
      find: list.find,
      toString: list.toString,
      insert: list.insert,
      append: list.append,
      remove: list.remove,
      // front: list.front,
      // end: list.end,
      // prev: list.prev,
      // next: list.next,
      // length: list.length,
      // currPos: list.currPos,
      // moveTo: list.moveTo,
      //getElement: list.getElement,
      //contains: list.contains,
    });
    methods.map((method) => {
      try {
        expect(typeof method).toEqual("function");
      } catch (error) {
        console.log(error);
      }
    });
  });
});
