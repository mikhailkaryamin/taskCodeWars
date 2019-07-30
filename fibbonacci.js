var fibonacci = function(n) {
  if(n == 0 || n == 1) {
    return n;
  }
  var fibArr = [1, 1];
  
  while(fibArr.length < n) {
    fibArr
    .push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
  }

  return fibArr[n - 1]
}