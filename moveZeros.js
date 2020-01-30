var moveZeros = function (arr) {
  let zeros = [];
  let indexZero = () => arr.indexOf(0);

  while (indexZero() > -1) {
    arr.splice(indexZero(), 1);
    zeros.push(0);
  }
  return arr
          .concat(zeros);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))