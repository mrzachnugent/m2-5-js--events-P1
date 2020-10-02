const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  expect(
    combineArrays(["caramel", "bacon"], ["zuchini", "arrow"])
  ).toStrictEqual(["arrow", "bacon", "caramel", "zuchini"]);
  expect(combineArrays(["crisp", "bacon"], ["zach", "apple"])).toStrictEqual([
    "apple",
    "bacon",
    "crisp",
    "zach",
  ]);
  expect(combineArrays(["crips", "bacon"], [1, "apple"])).toStrictEqual(
    undefined
  );
  // add more tests here...
});
