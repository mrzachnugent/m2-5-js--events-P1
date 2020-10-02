const getDaysInMonth = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getDaysInMonth("November")).toBe(30);
  expect(getDaysInMonth("Slaptober")).toBe("error");
  expect(getDaysInMonth("January")).toBe(31);
  expect(getDaysInMonth("October")).toBe(31);
});
