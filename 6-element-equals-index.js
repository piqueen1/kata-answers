// https://www.codewars.com/kata/element-equals-its-index
console.log('****START****');
function indexEqualsValue(a) {
  let match = -1;

  for (let i = 0; i < a.length; i++) {
    if (i === a[i]) {
      match = i;
    }
  }
  return match;
}
console.log('Answer: ', indexEqualsValue([-8, 0, 2, 5])); // 2
console.log('****END****');
