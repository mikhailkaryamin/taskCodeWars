function humanReadable(seconds) {
  let h = 0;
  let m = 0;
  let s = 0;
  let modulo = seconds;

  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n
  }

  function calcHour() {
    h = Math.floor(modulo / 3600);
    modulo = modulo - h * 3600;
  }

  function calcMinutes() {
    m = Math.floor(modulo / 60);
  }
  
  function calcSeconds() {
    s = modulo - m * 60;
  }

  if (seconds >= 3600) {
    calcHour();
    calcMinutes();
    calcSeconds();
  } else if (seconds >= 60) {
    calcMinutes();
    calcSeconds();
  } else {
    s = seconds;
  }

  return (minTwoDigits(h) + ':' + minTwoDigits(m) + ':' + minTwoDigits(s));
}