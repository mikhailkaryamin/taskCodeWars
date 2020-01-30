function add(a, b) {
  let oneNumber = a.toString().split('').reverse();
  let twoNumber = b.toString().split('').reverse();
  let balance = 0;

  let smallNumber = oneNumber.length >= twoNumber.length ? twoNumber : oneNumber;
  let bigNumber = oneNumber.length >= twoNumber.length ? oneNumber : twoNumber;
  let isBigNumber = false;

  function sumElements (el, i, arr) {
    let currentSum;

    if (smallNumber[i]) {
      currentSum = (+el + +smallNumber[i] + balance).toString();
    } else {
      currentSum = (+el + balance).toString();
    }

    if (currentSum.length == 2) {
      balance = 1;
      if (i == arr.length - 1) {
        isBigNumber = true;
      }

      arr[i + 1] = +arr[i + 1] + balance;
      balance = 0;
      return currentSum.charAt(1);
    } else {
      balance = 0;
    }

    return currentSum;
  }

  let sumNumber = bigNumber.map(sumElements).reverse();

  if (isBigNumber) {
    return 1 + sumNumber
      .join('');
  } else {
    return sumNumber
      .join('');;
  }

}

console.log(add('999999999', '1'))