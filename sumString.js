function sumStrings(first, second) {
  if (first.length < 15 && second.length < 15) {
    return +first + +second + '';
  }

  // if lengt > 15
  var lengthNumberSmall = (first.length < second.length) ? first.length : second.length;
  var firstArrRev = first.split('').reverse();
  var secondArrRev = second.split('').reverse();
  var completeSum = [];
  var temporarySum = 0;

  var addPartBigArr = function () {
    var bigArr = (first.length > second.length) ? first : second;
    var differentNumber = bigArr.length - lengthNumberSmall;
    var arr = bigArr.slice(0, differentNumber);

    if(first.length == second.length) {
      return 1;
    }

    if(temporarySum) {
      return arr
      .replace(/\d$/g, function(l) {
        return (+l + +1);
      })
    } else {
      return arr;
    }
  }

  for (var i = 0; i < lengthNumberSmall; i++) {
    var sum = +firstArrRev[i] + +secondArrRev[i];

    if (sum <= 9) {
      if((sum + temporarySum) <= 9) {
        completeSum.push(sum + temporarySum);
        temporarySum = 0;
      } else {
        completeSum.push(+(sum + '').charAt(1));
        temporarySum = 1;
      }
    } else {
      completeSum.push(+(sum + '').charAt(1) + temporarySum);
      temporarySum = 1;
    }
  }

  return addPartBigArr() + completeSum
    .reverse()
    .join('')
    .replace(/^0/y, function(l) {
      return l = ''
    });
}