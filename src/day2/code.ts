const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

const isValidGame = (game: string): boolean => {
  const rounds = game.split(":")[1].split(";");

  for (const round of rounds) {
    const red = round.match(/(\d+) red/);
    if (red && Number(red[1]) > MAX_RED) {
      return false;
    }

    const green = round.match(/(\d+) green/);
    if (green && Number(green[1]) > MAX_GREEN) {
      return false;
    }

    const blue = round.match(/(\d+) blue/);
    if (blue && Number(blue[1]) > MAX_BLUE) {
      return false;
    }
  }
  return true;
};

const getGameId = (game: string): number => {
  return Number(game.match(/Game (\d+):.*/)?.[1]);
};

export const puzzle1 = (input: string) => {
  const games = input.split("\n");

  return games
    .filter(isValidGame)
    .map(getGameId)
    .reduce((sum, cur) => (sum += cur), 0);
};

const calculateGamePower = (game: string): number => {
  const rounds = game.split(":")[1].split(";");
  let [minRed, minGreen, minBlue] = [0, 0, 0];

  for (const round of rounds) {
    const red = round.match(/(\d+) red/)?.[1];
    if (red && Number(red) > minRed) {
      minRed = Number(red);
    }

    const green = round.match(/(\d+) green/)?.[1];
    if (green && Number(green) > minGreen) {
      minGreen = Number(green);
    }

    const blue = round.match(/(\d+) blue/)?.[1];
    if (blue && Number(blue) > minBlue) {
      minBlue = Number(blue);
    }
  }

  return minRed * minGreen * minBlue;
};

export const puzzle2 = (input: string) => {
  const games = input.split("\n");
  return games.map(calculateGamePower).reduce((sum, cur) => (sum += cur), 0);
};
