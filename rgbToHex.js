function rgb (r, g, b) {
  if (r > 255) {
    r = 255
  }
  if (g > 255) {
    g = 255
  }
  if (b > 255) {
    b = 255
  }

  if (r < 0) {
    r = 0
  }
  if (g < 0) {
    g = 0
  }
  if (b < 0) {
    b = 0
  }

  if (r.toString(16).toUpperCase().length == 1) {
    r = '0' + r.toString(16).toUpperCase();
  } else {
    r = r.toString(16).toUpperCase()
  }

  if (g.toString(16).toUpperCase().length == 1) {
    g = '0' + g.toString(16).toUpperCase();
  } else {
    g = g.toString(16).toUpperCase()
  }

  if (b.toString(16).toUpperCase().length == 1) {
    b = '0' + b.toString(16).toUpperCase();
  } else {
    b = b.toString(16).toUpperCase()
  }

  return  r+g+b;
}