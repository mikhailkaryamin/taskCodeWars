function scramble(str1, str2) {
  let givenArray = str1.split('');
  let requiredArray = str2.split('');
  let count = 0;
  let filteredArray = givenArray.filter(el => requiredArray.indexOf(el) !== -1);

  if (requiredArray.length > filteredArray.length) {
    return false
  }
  
  for (let i = 0; i < requiredArray.length; i++) {
    let needIndex = filteredArray.indexOf(requiredArray[i]);

    if (needIndex !== -1) {
      count++;
      filteredArray.splice(needIndex, 1);

      if (count == requiredArray.length) {
        return true;
      }
    }
  }
  
  return false;
}

/////////// CW
function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { 
    arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; 
  }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}
