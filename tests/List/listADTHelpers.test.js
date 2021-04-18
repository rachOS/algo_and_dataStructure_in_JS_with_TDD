const { createArr, textFile } = require("../../helpers/listADTHelpers");

describe("test textFile", () => {
  it("textFile cant be undefined", () => {
    expect(textFile).not.toBe(undefined);
  });
});

describe("test createArr(file)", () => {
  it("When creatArr(file) is call, it must returns an Array", () => {
    expect(createArr(textFile)).toEqual(expect.any(Array));
  });
  it("creatArr(file)  must have on argument", () => {
    expect(createArr.length).toEqual(1);
  });
});
