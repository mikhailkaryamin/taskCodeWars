function getPINs(observed) {
  var Numbers = {
    0: [8],
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9]
  }
}

var permArr = [];
var usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice().join(''));
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};


console.log(permute([1, 2, 4]))