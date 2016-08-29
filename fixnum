function fix(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}

fix(1234, 8);
// "00001234"
fix(1234, 2);
// "1234"
