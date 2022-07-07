const { sum, myRemove, myFizzBuzz} = require("./functions.js");

describe("A sum function", () => {
  it("sums 4 and 5", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("sums 0 and 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('sums number 4 with the string "5" ', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError();
  });

  it('sums number 4 with the string "5" ', () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});

describe("function to delete element from an array", () => {
  it("return the expected array", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it("return the expected array", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("return the expected array", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("function that tests divisibility of a number by 3 and/or 5", () => {

  it('Return "FizzBuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

});

