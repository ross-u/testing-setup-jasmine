// const { subtract } = require("./../calculator");
import { subtract } from '../calculator.js';

describe("Subtract", () => {
  it("should subtract two positive integers correctly", () => {
    const result = subtract(1, 2);
    expect(result).toBe(-1);
  });

  it("should subtract two floating point numbers correctly", () => {
    const result = subtract(2.5, 1.35);
    expect(result).toBe(1.15);
  });

  it("should return 0 when function is called without arguments", () => {
    const result = subtract();
    expect(result).toBe(0);
  });

  it("should subtract 0 from a value when function is called with a single argument", () => {
    const result = subtract(26);
    expect(result).toBe(26);
  });
});
