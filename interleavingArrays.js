function interleave(...arrs) {
  let maxLengthArray = 0;
  const interleavingArray = [];

  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i].length > maxLengthArray) {
      maxLengthArray = arrs[i].length;
    }
  }

  for (let i = 0; i < maxLengthArray; i++) {
    for (let j = 0; j < arrs.length; j++) {
      let currentElement = arrs[j][i];
      if (currentElement !== undefined) {
        interleavingArray.push(currentElement)
      } else {
        interleavingArray.push(null)
      }

    }
  }

  return interleavingArray;
}
