function mathFunc(a, b) {
  if(a) {
    return Math.floor(eval(b + a))
  } else {
    return b
  }
}

function zero(a) {
  return mathFunc(a, '0')
};
function one(a) {
  return mathFunc(a, '1')
};
function two(a) {
  return mathFunc(a, '2')
};
function three(a) {
  return mathFunc(a, '3')
};
function four(a) {
  return mathFunc(a, '4')
};
function five(a) {
  return mathFunc(a, '5')
};
function six(a) {
  return mathFunc(a, '6')
};
function seven(a) {
  return mathFunc(a, '7')
};
function eight(a) {
  return mathFunc(a, '8')
};
function nine(a) {
  return mathFunc(a, '9')
};

function plus(a) {
  return '+' + a;
};
function minus(a) {
  return '-' + a;
};
function times(a) {
  return '*' + a;
};
function dividedBy(a) {
  return '/' + a;
};

// ------------- CW
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }