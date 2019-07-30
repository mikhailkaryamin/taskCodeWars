function longest(s1, s2) {
  var twoToOne = '';

  return twoToOne
    .concat(s1, s2)
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) === i;
    })
    .sort()
    .join('')
}

// c CW
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

// new Set записывает только уникальное значение
// Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта