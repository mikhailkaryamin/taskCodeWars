function countSmileys(arr) {
  var count = 0;
  arr.forEach(function (el) {
    if (el.match(/^[:;]/) && el.match(/[)D]$/)) {
      if (el.length == 3 && el.match(/[-~]/g)) {
        count++
      } else if (el.length == 2) {
        count++
      }
    }
  })
  return count
};

// CW

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}