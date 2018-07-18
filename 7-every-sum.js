//https://www.codewars.com/kata/every-possible-sum-of-two-digits/train/javascript

function digits(num) {
  var a = ("" + num).split("");
  var l = a.length;
  var r = [];
  var sum;
  for (var i = 0; i < l; ++i) {
    for (var j = i + 1; j < l; ++j) {
      sum = parseInt(a[i]) + parseInt(a[j]);
      r.push(sum);
    }
  }

  return r
}

