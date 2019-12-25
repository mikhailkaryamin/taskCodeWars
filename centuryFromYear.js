function century(year) {
  let century = year / 100;
  century = (century ^ 0) === century ? century : Math.ceil(century);
  return century;
}


////////////////////

const century = year => Math.ceil(year/100);
