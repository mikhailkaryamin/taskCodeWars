function duplicateCount(text){
  return text.toLowerCase()
  .split('')
  .filter(function (el, i, arr) {
    return arr.indexOf(el) !== i;
  })
  .filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  })
  .length
}

// CW
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}