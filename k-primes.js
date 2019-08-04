// c CW
function primeFactors(n) {
  var factors = [], i = 2;
  while (i * i <= n) {
      while (n % i === 0) {
          factors.push(i);
          n /= i;
      }
      i++;
  }
  if (n > 1) factors.push(n);
  return factors.length;
}
function countKprimes(k, start, nd) {
  var kprimes = [], i = start;
  while (i <= nd) {
      if (primeFactors(i) === k)
          kprimes.push(i);
      i++;
  }
  return kprimes;
}


function puzzle(s) {
  var a = countKprimes(1, 0, s);
  var b = countKprimes(3, 0, s);
  var c = countKprimes(7, 0, s);
  var cnt = 0;
  var ia = 0;
  while (ia < a.length) {
      var ib = 0;
      while (ib < b.length) {
          var ic = 0;
          while (ic < c.length) {
              if (a[ia] + b[ib] + c[ic] === s)
                  cnt++;
              ic++;
          }
          ib++;
      }
      ia++;
  }
  return cnt;
}

// -------------------------
function getKPrimes(n) {
  var result = [];
  for (var i = 2; i <= Math.sqrt(n); i += i > 2 ? 2 : 1) {
    while (n % i == 0) {
      result.push(i);
      n = n / i;
    }
  }
  if (n > 1) {
    result.push(n);
  }  

  return result;

}

function countKprimes(k, start, nd) {
  var result = [];
  for(var i = Math.max(start, 2); i <= nd; i++) {
    var kPrimes = getKPrimes(i);
    if (kPrimes.length === k) {
      result.push(i);
    }
  }
  return result;
}

function puzzle(s) {
  var p1 = countKprimes(1, 2, s),
      p3 = countKprimes(3, 2, s),
      p7 = countKprimes(7, 2, s),
      result = 0;
  for (var p7i = 0; p7i < p7.length; p7i++) {
    for (var p3i = 0; p3i < p3.length && s > p7[p7i] + p3[p3i]; p3i++) {
      result += p1.indexOf(s - p7[p7i] - p3[p3i]) > -1 ? 1 : 0;
    }
  }
  return result;
}
