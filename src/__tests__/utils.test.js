// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive: 'Mom' should return true", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for words with non-alphabetic characters", () => {
    expect(() => isPalindrome("abc123")).toThrow("Input must contain only alphabetic characters.");
  });

  it("throws an error for non-string inputs", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string.");
  });
});

