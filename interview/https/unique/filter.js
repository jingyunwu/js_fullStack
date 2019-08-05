function unique () {
  var res = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })
  return res;
}