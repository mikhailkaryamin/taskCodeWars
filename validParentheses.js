function validParentheses(parens){
  let array = parens.split('');

  if (array.length % 2) {
    return false;
  }

  if (array[0] == ')') {
    return false;
  }

  if (array[array.length - 1] == '(') {
    return false;
  }

  while (array.length > 2) {
    if (array[0] == '(') {
      let smileBracket = array.indexOf(')');

      if (smileBracket != -1) {
        array.splice(smileBracket, 1);
        array.splice(0, 1);
      }
    }

    if (array[0] == ')') {
      return false;
    }
  }

  if (array[1] == '(') {
    return false;
  } else {
    return true;
  }
}

console.log(validParentheses( "()()((()" ))

