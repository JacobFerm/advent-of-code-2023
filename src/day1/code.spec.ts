import { puzzle1, puzzle2 } from "./code";
import fs from "fs";

const test1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const test2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

test("test1", () => {
  expect(puzzle1(test1)).toBe(142);
});

test("puzzle1", () => {
  console.log(puzzle1(input));
});

test("test2", () => {
  expect(puzzle2(test2)).toBe(281);
});

test("puzzle2", () => {
  console.log(puzzle2(input));
});
