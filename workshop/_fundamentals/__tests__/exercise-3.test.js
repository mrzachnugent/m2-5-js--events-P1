const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  expect(getPairing(7)).toBe(undefined);
  expect(getPairing("fish")).toBe("white wine");
  expect(getPairing("beef")).toBe("red wine");
  // add more tests here...
});
