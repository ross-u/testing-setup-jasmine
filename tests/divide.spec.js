// const { divide } = require("./../calculator");
import { divide } from './../calculator.js';

describe("Divide", () => {
  it("should divide two positive integers correctly", () => {
    const result = divide(1, 2);
    expect(result).toBe(0.5);
  });

  it("should divide two floating point numbers correctly", () => {
    const result = divide(4.5, 2.5);
    expect(result).toBe(1.8);
  });

  it("should throw an error when dividing by 0", () => {
    expect(() => divide(1.35, 0)).toThrow();
  });
});
