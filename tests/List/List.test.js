const { list, List } = require("../../dataStructure/Lists/List");

describe("data structure : List ", () => {
  beforeAll(() => {
    list.clear();
  });
  afterAll(() => list.append("el"));
  afterEach(() => list.clear());

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
    list.append("42");
    expect(list.listSize).toBeTruthy();
    expect(typeof list.listSize).toBe("number");
    expect(list.listSize).toEqual(1);
    expect(list.listSize).toEqual(list.dataStore.length);
  });

  it("When an element append to the List, dataStore is not empty", () => {
    expect(list.dataStore).toHaveLength(0);
  });

  it("When an element append to the List, listSize and length have the same value", () => {
    expect(list.length()).toEqual(list.listSize);
  });

  it("When list.find(element) is called, a Number must be returned", () => {
    expect(list.find("element")).toEqual(expect.any(Number));
  });

  it("When an element is removed from a list,this element must not be found", () => {
    expect(list.find("el")).toBe(-1);
  });

  it("When an element is removed from a list, list.dataStore must not have empty items elements", () => {
    expect(list.dataStore).toEqual(expect.not.arrayContaining(["el"]));
  });
});

describe(" testing .currentPos(el) method", () => {
  it("When list.clear() is called, it returns a Number", () => {
    expect(list.currPos()).toEqual(expect.any(Number));
  });
});

describe(" testing .moveTo(el) method", () => {
  it("When list.moveTo(number) is called, it returns a Number", () => {
    expect(list.moveTo(5)).toEqual(expect.any(Number));
  });

  it("When list.moveTo(number) is called, .currentPos is equal to this number", () => {
    expect(list.moveTo(5)).toEqual(list.position);
  });
});

describe(" testing .getElement(el) method", () => {
  it("When list.getElement(element) is called, it returns  element value", () => {
    expect(list.getElement()).toEqual(list.dataStore[list.position]);
  });
});

describe(" testing .next() method", () => {
  it("When list.next() is called, it returns  a Number", () => {
    expect(list.next()).toEqual(expect.any(Number));
  });
  it("When list.next() is called, it must be equals to  list.currentPos + 1", () => {
    const expected = list.currPos() + 1;
    expect(list.next()).toBe(expected);
  });
});

describe(" testing .prev() method", () => {
  it("When list.next() is called, it returns  a Number", () => {
    expect(list.prev()).toEqual(expect.any(Number));
  });
  it("When list.prev() is called, it must be equals to  list.currentPos - 1", () => {
    const expected = list.currPos() - 1;
    expect(list.prev()).toBe(expected);
  });
});

describe(" testing .end() method", () => {
  it("When list.end() is called, it returns  a Number", () => {
    expect(list.end()).toEqual(expect.any(Number));
  });
  it("When list.end() is called, it must be equals to  list.currentPos  = list.length", () => {
    expect(list.end()).toEqual(list.listSize - 1);
  });
});

describe(" testing .front() method", () => {
  it("When list.front() is called, it returns  a Number", () => {
    expect(list.front()).toEqual(expect.any(Number));
  });
  it("When list.front() is called, it must be equals to  list.currentPos  = list.length", () => {
    expect(list.front()).toEqual(0);
  });
});

describe(" testing .contains(element) method", () => {
  it("When list.contains(element) is called, it returns  true", () => {
    expect(list.contains("el")).toBeTruthy();
  });
  it("When list.contains(element) is called, it returns  a Boolean", () => {
    expect(list.contains("element")).toEqual(expect.any(Boolean));
    expect(list.contains("42")).toEqual(expect.any(Boolean));
  });
});

describe(" testing .toString() method", () => {
  it("When list.toString() is called, it returns  a String", () => {
    expect(list.toString()).toEqual(expect.any(String));
  });
});

describe(" testing .insert(element,after) method", () => {
  it("When list.insert() is called, it returns  a String", () => {
    expect(list.insert("42")).toEqual(expect.any(Boolean));
  });
  it("list.insert() must have 2 arguments", () => {
    expect(list.insert.length).toEqual(2);
  });

  it("Insert an element if the second argument is found", () => {
    expect(list.insert("43", "el")).toBeTruthy();
  });

  it("Do not Insert an element if the second argument is found", () => {
    expect(list.insert("43", 5)).not.toBeTruthy();
  });
});
