function dirReduc(arr){
  var dictionary = {
    "NORTH": "SOUTH",
    "WEST": "EAST",
    "SOUTH": "NORTH",
    "EAST": "WEST"
  }

  if (arr.filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  }).length == arr.length) {
    return arr
  }

  var newArr = arr.slice(0);

  arr
    .forEach(function (el) {
    if(newArr.indexOf(dictionary[el]) !== -1) {
      newArr.splice(newArr.indexOf(dictionary[el]), 1);
    }
  })
  
  return newArr;
}

// cw 
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
