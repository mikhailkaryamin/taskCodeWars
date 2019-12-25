function isIsogram(str) {
  const symbols = str.toLowerCase().split('');
  const isRepeatSymbol = (symbol) => symbols.indexOf(symbol) !== symbols.lastIndexOf(symbol);

  return !symbols
    .some(isRepeatSymbol);
}