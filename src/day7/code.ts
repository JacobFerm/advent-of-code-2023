import _ from "lodash";

interface HandI {
  cards: number[];
  multiplier: number;
}

function cardToValue(card: string): number {
  switch (card) {
    case "T":
      return 10;
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    case "A":
      return 14;
  }
  return Number(card);
}

export enum HandType {
  FiveOfAKind = 7,
  FourOfAKind = 6,
  FullHouse = 5,
  ThreeOfAKind = 4,
  TwoPair = 3,
  OnePair = 2,
  HighCard = 1,
}

export type CardGroupings = number[];

const handContents: Map<CardGroupings, HandType> = new Map([
  [[5], HandType.FiveOfAKind],
  [[4, 1], HandType.FourOfAKind],
  [[3, 2], HandType.FullHouse],
  [[3, 1, 1], HandType.ThreeOfAKind],
  [[2, 2, 1], HandType.TwoPair],
  [[2, 1, 1, 1], HandType.OnePair],
  [[1, 1, 1, 1, 1], HandType.HighCard],
]);

export function cardGroupingToHandType(
  cardGroupings: CardGroupings
): HandType | undefined {
  return [...handContents.entries()].find(([arr, handType]) => _.isEqual(arr, cardGroupings))?.[1]
}

const parseHands = (input: string): HandI[] => {
  return input.split("\n").map((s) => {
    const hand = s.split(" ");
    return {
      cards: hand[0].split("").map(cardToValue),
      multiplier: Number(hand[1]),
    };
  });
};

function scoreHand(scoreArray: number[]): number {
  return 0;
}

function compareFn(a: number[], b: number[]): number {
  const arrA = new Array(14);
  const arrB = new Array(14);

  for (let i = 0; i < 5; i++) {
    arrA[a[i]]++;
    arrA[b[i]]++;
  }

  const cardGroupingA = arrA.filter((c) => c != 0).sort();
  const cardGroupingB = arrB.filter((c) => c != 0).sort();

  const handTypeA = cardGroupingToHandType(cardGroupingA);
  const handTypeB = cardGroupingToHandType(cardGroupingB);

  const diff = handTypeA - handTypeB;

  if (diff != 0) {
    return diff;
  }

  // If same score > find highest value card in order
  for (let i = 0; i < 5; i++) {
    const diffCard = a[i] - b[i];
    if (diffCard !== 0) {
      return diffCard;
    }
  }

  return 0;
}

export const puzzle1 = (input: string) => {
  const hands: HandI[] = parseHands(input);
  console.dir(hands.map((h) => h.cards));

  return 0;
};

export const puzzle2 = (input: string) => {
  return 0;
};
