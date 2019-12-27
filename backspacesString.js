function cleanString(s) {
  let array = s.split('');

  while (array.includes('#')) {
    let indexVal = array.findIndex(curVal => curVal == '#');
    if (indexVal) {
      array.splice(indexVal - 1, 2);
    } else {
      array.splice(0, 1);
    }
  }
  
  return array
    .join('');
};
