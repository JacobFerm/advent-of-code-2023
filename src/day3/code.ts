interface PartI {
  num: number;
  length: number;
  x: number;
  y: number;
}

interface SymbolI {
  symbol: string;
  x: number;
  y: number;
}

const findPossibleParts = (input: string): PartI[] => {
  const lines = input.split("\n");
  const parts: PartI[] = [];
  lines.forEach((line, index) => {
    const regex = /\d+/g;
    let match;
    while ((match = regex.exec(line)) != null) {
      parts.push({
        num: Number(match[0]),
        length: match[0].length,
        x: match.index,
        y: index,
      });
    }
  });
  return parts;
};

const findSymbols = (input: string): SymbolI[] => {
  const lines = input.split("\n");
  const symbols: SymbolI[] = [];
  lines.forEach((line, index) => {
    const regex = /(?![\d|\.]).{1}/g;
    let match;
    while ((match = regex.exec(line)) != null) {
      symbols.push({
        symbol: match[0],
        x: match.index,
        y: index,
      });
    }
  });

  return symbols;
};

const isConnected = (part: PartI, symbol: SymbolI): boolean => {
  const minX = part.x - 1;
  const maxX = part.x + part.length;
  const minY = part.y - 1;
  const maxY = part.y + 1;
  if (
    symbol.x >= minX &&
    symbol.x <= maxX &&
    symbol.y >= minY &&
    symbol.y <= maxY
  ) {
    return true;
  }
  return false;
};

const isValidPart = (part: PartI, symbols: SymbolI[]): boolean => {
  for (const symbol of symbols) {
    if (isConnected(part, symbol)) {
      return true;
    }
  }
  return false;
};

export const puzzle1 = (input: string) => {
  const possibleParts = findPossibleParts(input);
  const symbols = findSymbols(input);
  return possibleParts
    .filter((p) => isValidPart(p, symbols))
    .reduce((sum, cur) => (sum += cur.num), 0);
};

const calculateGearRatio = (symbol: SymbolI, parts: PartI[]): number => {
  if (symbol.symbol !== "*") {
    return 0;
  }

  const connectedParts = parts.filter((p) => isConnected(p, symbol));
  if (connectedParts.length === 2) {
    return connectedParts[0].num * connectedParts[1].num;
  }
  return 0;
};

export const puzzle2 = (input: string) => {
  const possibleParts = findPossibleParts(input);
  const symbols = findSymbols(input);
  const validParts = possibleParts.filter((p) => isValidPart(p, symbols));

  return symbols
    .map((s) => calculateGearRatio(s, validParts))
    .reduce((sum, cur) => (sum += cur), 0);
};
