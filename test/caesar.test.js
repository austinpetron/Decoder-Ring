// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar")

describe("caesar", () => {
    it("should return false if shift is less than -25", () =>{
    const input = "hello world"
    const shift = -27;
    const actual = caesar(input, shift);
expect(actual).to.be.false;
});

it("should encode with shift 6", () => {
    const input = "hello world";
    const shift = 6;
    const expected = "nkrru cuxrj"
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
});
it("should decode with shift -1", () => {
    const input = "sdrs";
    const shift = -1;
    const expected = "test";
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
});
it("should handle special characters", () => {
    const input = "hell.o"
    const shift = +1;
    const expected = "ifmm.p"
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
})

});