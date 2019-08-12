/*
1) разбиваем на массив
2) считаем у каждого числа сумму цифр
3) сортируем
4) собираем строку
 */
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
