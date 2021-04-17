const { list, List } = require("./List");

describe("data structure : List ", () => {
  beforeAll(() => {
    list.clear();
  });
  afterAll(() => list.append("el"));

  it("list must be an instance of Class List", () => {
    expect(list).toBeInstanceOf(List);
  });

  it("{dataStore} property must be an Array", () => {
    expect(list.dataStore).toEqual(expect.any(Array));
  });

  it("{dataStore} property must be an empty Array on first instance", () => {
    const firstInstance = new List([], 0, 0);
    expect(firstInstance.dataStore).toHaveLength(0);
  });

  it("{listSize, position } properties must be a Number", () => {
    expect(list.listSize).toEqual(expect.any(Number));
    expect(list.position).toEqual(expect.any(Number));
  });

  it("{clear,find,toString,insert, append,remove,front,end,prev,next,length,currPos,moveTo,getElement,contains } \
  properties must be a Function", () => {
    expect(typeof list.clear).toEqual("function");
    expect(typeof list.find).toEqual("function");
    expect(typeof list.toString).toEqual("function");
    expect(typeof list.insert).toEqual("function");
    expect(typeof list.append).toEqual("function");
    expect(typeof list.remove).toEqual("function");
    expect(typeof list.front).toEqual("function");
    expect(typeof list.end).toEqual("function");
    expect(typeof list.prev).toEqual("function");
    expect(typeof list.next).toEqual("function");
    expect(typeof list.length).toEqual("function");
    expect(typeof list.currPos).toEqual("function");
    expect(typeof list.moveTo).toEqual("function");
    expect(typeof list.getElement).toEqual("function");
    expect(typeof list.contains).toEqual("function");
  });

  it("List instance must have 3 properties", () => {
    expect(Object.keys(list).length).toBe(3);
  });

  it("When an element append to the List, listSize value must be incremented by 1", () => {
    list.append("element");
    expect(list.listSize).toBe(1);
    list.append("element");
    expect(list.listSize).toBe(2);
    list.append("element");
    expect(list.listSize).not.toBe(4);
  });

  it("When an element append to the List, dataStore is not empty", () => {
    expect(list.dataStore.length > 0).toBeTruthy();
  });

  it("When an element append to the List, listSize and length have the same value", () => {
    expect(list.length()).toEqual(list.listSize);
  });

  it("When list.find(element) is called, a Number must be returned", () => {
    expect(list.find("element")).toEqual(expect.any(Number));
  });

  it("When an element is removed from a list,this element must not be found", () => {
    list.append("el");
    list.remove("el");
    expect(list.find("el")).toBe(-1);
  });

  it("When an element is removed from a list, list.dataStore must not have empty items elements", () => {
    list.append("el");
    list.remove("el");
    list.append("el2");
    expect(list.dataStore).toEqual(expect.not.arrayContaining(["el"]));
  });

  it("When list.clear() is called, it reset list.dataStore to an empty Array", () => {
    expect(list.clear()).toBe(expect(list.dataStore).toHaveLength(0));
  });
});
