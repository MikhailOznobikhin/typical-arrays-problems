
exports.min = function min (array) {
  if(!array || array.length === 0) return 0;
  let a = 10000;
  array.forEach(item => {
    if(a > item){
      a = item
    }
  });
  return a;
}

exports.max = function max (array) {
  if(!array || array.length  === 0) return 0;
  let a = 0;
  array.forEach(item => {
    if(a < item){
      a = item
    }
  });
  return a;
}

exports.avg = function avg (array) {
  if(!array || array.length  === 0) return 0;
  let a = 0
  array.forEach(item => {
      a = a+item
  });
  
  return a / array.length;
}
