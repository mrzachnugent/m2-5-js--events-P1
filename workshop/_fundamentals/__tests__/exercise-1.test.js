const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  expect(letterCount(["crisp", "bacon", "egg"])).toBe(13);
  expect(letterCount(["crisp", "bacon", "bread"])).toBe(15);
  expect(letterCount(["crisp", "bacon", "egg", "bread"])).toBe(18);
  // add more tests here...
});
