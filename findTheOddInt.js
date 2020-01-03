function findOdd(A) {
  const sortArray = A.sort((a, b) => a - b);
  
  let count = 1;

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] === sortArray[i + 1]) {
      count++;
      continue;
    } else if (sortArray[i] !== sortArray[i + 1] && count % 2) {
      return sortArray[i];
    } else {
      count = 1;
    }
  }
  return 0;
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));