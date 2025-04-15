"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("displayUserName", () => {
    it("should return the full name of the user", () => {
        const user = { firstName: "John", lastName: "Doe" };
        const result = (0, index_1.displayUserName)(user);
        expect(result).toBe("John Doe");
    });
    it("should handle empty firstName and lastName", () => {
        const user = { firstName: "", lastName: "" };
        const result = (0, index_1.displayUserName)(user);
        expect(result).toBe(" ");
    });
    it("should handle missing firstName", () => {
        const user = { firstName: "", lastName: "Doe" };
        const result = (0, index_1.displayUserName)(user);
        expect(result).toBe(" Doe");
    });
    it("should handle missing lastName", () => {
        const user = { firstName: "John", lastName: "" };
        const result = (0, index_1.displayUserName)(user);
        expect(result).toBe("John ");
    });
});
