// https://www.codewars.com/kata/element-equals-its-index
console.log('****START****');
function indexEqualsValue(a) {
  let match = -1;

  for (let i = 0; i < a.length; i++) {
    if (i === a[i]) {
      return i;
      break;
    }
  }
  return match;
}
console.log('Answer: ', indexEqualsValue([-8, 0, 2, 5])); // 2
console.log('****END****');

/* Result: my code took too long.  The correct
answer is a binary search tree, like this:

function indexEqualsValue(a) {
  if (a[0] === 0)
    return 0;
  let result = -1;
  let value;
  let start = 0;
  let length = a.length - 1;
  let mid;
  while (start != length) {
    mid = Math.floor(( start + length ) / 2);
    value = a[mid];
    if(mid < value) {
      length = mid;
    }
    else if( mid > value ) {
      start = mid + 1;
    }
    else {
      result = value;
      length = mid;
    }
  }
  return result;
}
*/