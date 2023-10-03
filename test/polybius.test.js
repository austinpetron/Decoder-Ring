// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode message to numbers", () => {
        const input = "hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input, true);
        expect(actual).to.equal(expected);

    }); 
    it("should decode message to words", () => {
        const input = "3251131343";
        const expected = "hello";
        const actual = polybius(input, false);
        expect(actual).to.eql(expected);
  });
    it("should return false with invalid input", () => {
        const input = "32511212435";
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
    it("should handle uppercase letters", () => {
        const input = "Hello World";
        const expected = "3251131343 2543241341";
        const actual = polybius(input, true);
        expect(actual).to.equal(expected);
    });
    
});