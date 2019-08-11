var l1 = [10, 5, 2, 3, 7, 5];

var sum_pairs = function (ints, s) {
  var arr = [];
  var newArr = [];
  for (let i = 0; i < ints.length; i++) {
    var needAmount = s - ints[i];
    var indexFind = ints.indexOf(needAmount, i + 1);

    if (indexFind !== -1 && arr.length == 0) {
      arr.push(i, indexFind);
      newArr.push(ints[i], ints[indexFind]);
    }


    if (indexFind !== -1 && (arr[1] > indexFind)) {
      arr.splice(0, 2, i, indexFind);
      newArr.splice(0, 2, ints[i], ints[indexFind])
      break
    }

    if (ints.length > 1000) {
      break;
    }
  }

  if (newArr.length == 0) {
    return undefined;
  } else {
    return newArr
  }

}

// не проходят большие массивы
console.log(sum_pairs(l1, 10))