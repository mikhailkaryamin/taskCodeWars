function titleCase(title, minorWords) {
  if(!title && !minorWords){
    return ''
  }

  var text = title
  .toLowerCase()
  .replace(/\b\w/g, function(l){
    return l.toUpperCase()
  })


  if (minorWords) {
    var wordsMinor = minorWords
    .toLowerCase()
    .replace(/\b\w/g, function(l){ 
      return l.toUpperCase() 
    })
    .split(' ');

    return text
    .split(' ')
    .map(function(word, i, text) {
      if (i !== 0 && wordsMinor.indexOf(word) !== -1) {
        return word = word.charAt(0)
        .toLowerCase()
        + word.slice(1)
        ;
      } else {
        return word;
      }
    })
    .join(' ');
  }

  return text;
}

// cd
function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}