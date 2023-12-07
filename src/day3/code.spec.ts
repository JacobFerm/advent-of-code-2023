import { puzzle1, puzzle2 } from "./code";
import fs from "fs";

const test1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

test("test1", () => {
  expect(puzzle1(test1)).toBe(4361);
});

test("puzzle1", () => {
  console.log(puzzle1(input));
});

test("test2", () => {
  expect(puzzle2(test1)).toBe(467835);
});

test("puzzle2", () => {
  console.log(puzzle2(input));
});
