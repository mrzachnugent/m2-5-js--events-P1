const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "age"
    )
  ).toStrictEqual([23, 36, 43]);
  expect(
    getValues(
      [
        { name: "zach", age: 23 },
        { name: "harris", age: 36 },
        { name: "Ellie", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["zach", "harris", "Ellie"]);
  expect(
    getValues(
      [
        { name: "zach", age: 26 },
        { name: "harris", age: 28 },
        { name: "Ellie", age: 21 },
      ],
      "age"
    )
  ).toStrictEqual([26, 28, 21]);
  // add more tests here...
});
