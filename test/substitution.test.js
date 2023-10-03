// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if invalid alphabet", () =>{
        const input = "test";
        const alphabet = "xoyqmcgrukswaflnthdjpzibevz";
        const actual = substitution(input, alphabet, true);
        expect(actual).to.be.false;
    });
    it("should properly encode message", () => {
        const input = "zulu";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "vpwp";
        const actual = substitution(input, alphabet, true);
        expect(actual).to.equal(expected);

    });
    it("should properly decode", () => {
        const input = "vpwp";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "zulu";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    });

})