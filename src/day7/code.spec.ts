import { HandType, cardGroupingToHandType, puzzle1, puzzle2 } from "./code";
import fs from "fs";

const test1 = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8");

test("cardGroupToHandType", () => {
  const actual: HandType | undefined = cardGroupingToHandType([2, 2, 1]);
  const expected = HandType.TwoPair;
  expect(actual).toBe(expected);
});

test("test1", () => {
  expect(puzzle1(test1)).toBe(6440);
});

// test("puzzle1", () => {
//   console.log(puzzle1(input));
// });

// test("test2", () => {
//   expect(puzzle2(test1)).toBe(-1);
// });

// test("puzzle2", () => {
//   console.log(puzzle2(input));
// });
