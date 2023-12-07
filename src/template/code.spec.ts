import { puzzle1, puzzle2 } from "./code";
import fs from "fs";

const test1 = ``;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

test("test1", () => {
  expect(puzzle1(test1)).toBe(-1);
});

test("puzzle1", () => {
  console.log(puzzle1(input));
});

test("test2", () => {
  expect(puzzle2(test1)).toBe(-1);
});

test("puzzle2", () => {
  console.log(puzzle2(input));
});
