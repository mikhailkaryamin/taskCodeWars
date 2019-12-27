function maxMultiple(divisor, bound){
  for (bound; bound >= 0; bound--) {
    if (bound % divisor === 0 ) {
      return bound;
    }
  }
}

////////

const maxMultiple = (divisor,bound) => bound - bound % divisor ;