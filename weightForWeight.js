/*
1) разбиваем на массив
2) считаем у каждого числа сумму цифр
3) сортируем
4) собираем строку
 */
var testString = "2000 10003 1234000 44444444 9999 11 11 22 123";

function orderWeight(strng) {
  return strng
    .split(' ')
    .sort(function (a, b) {
    var sumA = a.split('').reduce(function(prev, cur) {
      return +prev + +cur;
    });
    var sumB = b.split('').reduce(function (prev, cur) {
      return +prev + +cur
    });
    if(sumA < sumB) {
      return -1;
    }
    if(sumA > sumB) {
      return 1;
    }
    if(sumA == sumB) {
      if(a < b) {
        return -1;
      }
      if(a > b) {
        return 1;
      }
    }
    return 0;
  })
  .join(' ');
}

console.log(orderWeight(testString))