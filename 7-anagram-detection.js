console.log('****START****');

var isAnagram = function (a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  a = a.toUpperCase().split('').sort();
  b = b.toUpperCase().split('').sort();

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log('Answer: ', isAnagram("foefet", "toffee")); // true
console.log('****END****');
