const calculateWins = (time: number, distanceToBeat: number): number => {
  return [...Array(time).keys()]
    .map((speed) => speed * (time - speed))
    .filter((distance) => distance > distanceToBeat).length;
};

export const puzzle1 = (input: string) => {
  const [times, distances] = input
    .split("\n")
    .map((lines) => lines.split(/:\s+/)[1])
    .map((s) => s.split(/\s+/).map(Number));
  
  return [...Array(times.length).keys()]
    .map((i) => calculateWins(times[i], distances[i]))
    .reduce((acc, cur) => acc * cur, 1);
};

export const puzzle2 = (input: string) => {
  const [time, distance] = input
    .split("\n")
    .map((lines) => lines.split(/:\s+/)[1])
    .map((s) => s.replace(/\s/g, ""))
    .map(Number);

  return calculateWins(time, distance);
};
