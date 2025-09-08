console.log("demo.test.js");

import { describe, it, expect } from "@jest/globals";

const addNums = (a, b) => {
    return a + b;
}

describe("test addNums", () => {

    it("Positive test case", () => {
        expect(addNums(2, 3)).toBe(5);
    });

    it("Negative test case", () => {
        expect(addNums(2, 3)).not.toBe(6);
    });
});


// describe("", () => { });