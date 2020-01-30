function solution(input, markers) {
  const endLine = '\n';
  let arrayString = input.split(endLine);

  for (let i = 0; i < arrayString.length; i ++) {
    for (let j = 0; j < markers.length; j++) {
      let indexSymbol = arrayString[i].indexOf(markers[j]);

      if (indexSymbol != -1) {
        arrayString[i] = arrayString[i]
          .slice(0, indexSymbol)
          .trim();
      }
    }
  }

  return arrayString
    .join(endLine);
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));

/// CW
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
