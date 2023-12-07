interface ConversionI {
  destination: number;
  source: number;
  length: number;
}

interface Seeds {
  start: number;
  length: number;
}

const parseConversions = (section: string): ConversionI[] => {
  return section
    .split("\n")
    .slice(1)
    .map((row) => {
      const [destination, source, length] = row.split(" ").map(Number);
      return {
        destination,
        source,
        length,
      };
    });
};

const convert = (num: number, conversions: ConversionI[]): number => {
  for (const conversion of conversions) {
    if (
      num >= conversion.source &&
      num < conversion.source + conversion.length
    ) {
      return num + (conversion.destination - conversion.source);
    }
  }
  return num;
};

export const puzzle1 = (input: string) => {
  const sections = input.split("\n\n");
  const seeds = sections[0].split(": ")[1].split(" ").map(Number);
  const conversions = sections.map(parseConversions);
  const locations = seeds.map((s) =>
    conversions.reduce((acc, cur) => convert(acc, cur), s)
  );

  return Math.min(...locations);
};

const calculateSeeds = (seedInput: string): Seeds[] => {
  const numbers = seedInput.split(": ")[1].split(" ").map(Number);
  const seeds: Seeds[] = [];
  for (let i = 0; i < numbers.length; i = i + 2) {
    seeds.push({
      start: numbers[i],
      length: numbers[i + 1],
    });
  }
  return seeds;
};

const convertSeeds = (seeds: Seeds[], conversions: ConversionI[]): Seeds[] => {
  const oldSeeds = [...seeds];
  const newSeeds: Seeds[] = [];

  let seed: Seeds | undefined;
  while ((seed = oldSeeds.shift()) !== undefined) {
    // Find the conversion (if any) that matches the beginning of the seed range
    const conversion = conversions.find(
      (conv) =>
        seed !== undefined &&
        seed.start >= conv.source &&
        seed.start < conv.source + conv.length
    );

    if (conversion !== undefined) {
      // We found a conversion for the current seed range
      if (seed.start + seed.length <= conversion.source + conversion.length) {
        // Seed can be fully converted using a single conversion
        newSeeds.push({
          start: seed.start + (conversion.destination - conversion.source),
          length: seed.length,
        });
      } else {
        // Only part of the seed can be converted, split it and add the overflow
        // back to process queue
        const partialLength =
          conversion.source - seed.start + conversion.length;
        const partialSeed = {
          start: seed.start + (conversion.destination - conversion.source),
          length: partialLength,
        };
        const overflowSeed = {
          start: conversion.source + conversion.length,
          length: seed.length - partialLength,
        };

        newSeeds.push(partialSeed);
        oldSeeds.push(overflowSeed);
      }
    } else {
      // No conversion found, keep seed as-is
      newSeeds.push(seed);
    }
  }

  return newSeeds;
};

export const puzzle2 = (input: string) => {
  const sections = input.split("\n\n");
  let seeds = calculateSeeds(sections[0]);
  const conversions = sections.slice(1).map(parseConversions);

  for (const conv of conversions) {
    seeds = convertSeeds(seeds, conv);
  }

  return Math.min(...seeds.map((s) => s.start));
};
