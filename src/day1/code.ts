export const puzzle1 = (input: string) => {
  const lines = input.split("\n");
  let sum = 0;

  for (const line of lines) {
    const first = line.match(/\D*(\d).*/)?.[1] || "";
    const last = line.match(/.*(\d)\D*/)?.[1] || "";
    sum += Number(`${first}${last}`);
  }

  return sum;
};

const parseNumber = (s: string | undefined): string => {
  if (!s) {
    return "";
  }
  switch (s) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      return s;
  }
};

export const puzzle2 = (input: string) => {
  const lines = input.split("\n");
  let sum = 0;

  for (const line of lines) {
    const first = parseNumber(
      line.match(/\D*?(\d|one|two|three|four|five|six|seven|eight|nine).*/)?.[1]
    );
    const last = parseNumber(
      line.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)\D*?/)?.[1]
    );
    sum += Number(`${first}${last}`);
  }

  return sum;
};
