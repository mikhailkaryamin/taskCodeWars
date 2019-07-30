function comp(array1, array2){

  if (!array1 || !array2) {
    return false
  }
  return array2
  .map(function (el) {
    return Math.sqrt(el);
  })
  .sort(function (a, b) {
    return a - b;
  })
  .join(',')
  ===
  array1
  .sort(function (a, b) {
    return a - b;
  })
  .join(',')
}

// CD
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); 
  array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

