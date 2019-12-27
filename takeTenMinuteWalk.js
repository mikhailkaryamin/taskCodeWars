function isValidWalk(walk) {

  if (walk.length !== 10) {
    return false;
  } 

  const n = walk.filter(el => el == 'n');
  const s = walk.filter(el => el == 's');
  const e = walk.filter(el => el == 'e');
  const w = walk.filter(el => el == 'w');

  if (n.length == s.length && e.length == w.length) {
    return true;
  } else {
    return false;
  }
}
