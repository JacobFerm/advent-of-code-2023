const calculateCorrectNumbers = (card: string): number => {
  const numbers = card.split(/:\s+/)[1];
  const [winningStr, currentStr] = numbers.split(/ \|\s+/);
  const winning = winningStr.split(/\s+/);
  const current = currentStr.split(/\s+/);

  return current.filter((num) => winning.includes(num)).length;
};

const mapPowerPoints = (correctNumbers: number) => {
  if (correctNumbers) {
    return Math.pow(2, correctNumbers - 1);
  }
  return 0;
};

export const puzzle1 = (input: string) => {
  const cards = input.split("\n");
  return cards
    .map(calculateCorrectNumbers)
    .map(mapPowerPoints)
    .reduce((sum, cur) => (sum += cur), 0);
};

export const puzzle2 = (input: string) => {
  const cards = input.split("\n");
  const correctNumbersPerCard = cards.map(calculateCorrectNumbers);

  const allPoints: number[] = [];
  for (let i = correctNumbersPerCard.length - 1; i >= 0; i--) {
    const current = correctNumbersPerCard[i];

    // Count current card
    let points = 1;

    // Check index of last card so we don't go beyond the last
    const lastIndex = Math.min(i + current, correctNumbersPerCard.length - 1);
    const extraCards = lastIndex - i;

    // Add the points from extra cards
    for (let j = 0; j < extraCards; j++) {
      points += allPoints[j];
    }
    allPoints.unshift(points);
  }

  return allPoints.reduce((sum, cur) => (sum += cur), 0);
};
