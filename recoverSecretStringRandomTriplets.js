var recoverSecret = function(triplets) {

  let flatArray = triplets.reduce((acc, val) => acc.concat(val));
  let uniqSymbols = Array.from(new Set(flatArray));
  let sercetCode = [];
  let currentSymbol;

  uniqSymbols.forEach(() => {
    let numbersSymbol = uniqSymbols.map((el, i) => {
      let indexArr = [];
      triplets.forEach((triplet) => {
        let indexEl = triplet.indexOf(el);
        if (indexEl !== -1) {
          indexArr.push(indexEl);
        }
      })
      let obj = {};
      obj[el] = indexArr;
      return obj
    })
  
    numbersSymbol.forEach((symbol, i) => {
      if (symbol[uniqSymbols[i]].length) {
        if (symbol[uniqSymbols[i]].every((el) => el == 0)) {
          sercetCode.push(uniqSymbols[i]);
          currentSymbol = uniqSymbols[i];
        }
      }
    })

    triplets = triplets.map((triplet) => {
      return triplet
        .filter((el) => el !== currentSymbol)
    })

  })

  return sercetCode
          .join(``)
}

// let secret1 = "whatisup"
let triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
];
console.log(recoverSecret(triplets1));