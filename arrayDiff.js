function array_diff(a, b) {
  function isPresent(el) {
    return !b
      .includes(el);
  }

  return a
    .filter(isPresent)
}