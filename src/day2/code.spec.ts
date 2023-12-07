import { puzzle1, puzzle2 } from "./code";
import fs from "fs";

const test1 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

test("test1", () => {
  expect(puzzle1(test1)).toBe(8);
});

test("puzzle1", () => {
  console.log(puzzle1(input));
});

test("test2", () => {
  expect(puzzle2(test1)).toBe(2286);
});

test("puzzle2", () => {
  console.log(puzzle2(input));
});
