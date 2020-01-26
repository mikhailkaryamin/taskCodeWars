function greatestProduct(input) {
  let maxNumber = 0;

  for (let i = 0; i < input.length - 4; i++) {
    let multiplication = input[i] * input[i + 1] * input[i + 2] * input[i + 3] * input[i + 4];
    if (multiplication > maxNumber) {
      maxNumber = multiplication;
    }
  }

  return maxNumber;
}

console.log(greatestProduct("123834539327238239583"))
