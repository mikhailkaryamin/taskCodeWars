function solution(list){
  let filterList = list.filter((el, i) => {
    if (el + 1 !== list[i + 1]) {
      return el
    } else if (el - 1 !== list[i - 1]) {
      return el
    }
  })

  let listWithSigns = filterList.map((el) => {
    const indexList = list.indexOf(el);
    if (indexList === list.length - 1) {
      return el;
    }
    if (el + 1 !== list[indexList + 1]) {
      let number = el + `,`;
      return number;
    } else if (el + 2 === list[indexList + 2]) {
      let number = el + `-`;
      return number;
    } else {
      let number = el + `,`;
      return number;
    }
  })

  return listWithSigns
          .join(``)
 }


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));