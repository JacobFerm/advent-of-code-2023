import { puzzle1, puzzle2 } from "./code";
import fs from "fs";

const test1 = `Time:      7  15   30
Distance:  9  40  200`;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

test("test1", () => {
  expect(puzzle1(test1)).toBe(288);
});

// test("puzzle1", () => {
//   console.log(puzzle1(input));
// });

test("test2", () => {
  expect(puzzle2(test1)).toBe(71503);
});

// test("puzzle2", () => {
//   console.log(puzzle2(input));
// });
