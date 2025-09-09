// console.log("demo.test.js");

import { describe, it, expect } from "@jest/globals";

const addNums = (a, b) => {
    return a + b;
}

// const mock = 

describe("test addNums", () => {

    it("Positive test case", () => {
        expect(addNums(2, 2)).toBe(4);
    });

    it("Negative test case", () => {
        expect(addNums(2, 2)).not.toBe(3);
    });

    it("Another negative test case", () => {
        expect(addNums(2, 2)).not.toBe(5);
    });

});


// describe("", () => { it("", () => { }); });


