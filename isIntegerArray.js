function isIntArray(arr) {
  if (Array.isArray(arr)) {
    if (!arr.every(el => Math.floor(el) === el)) {
      return false;
    }

    return true;
  }

  return false;
}
