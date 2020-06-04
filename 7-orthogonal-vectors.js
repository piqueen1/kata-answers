// https://www.codewars.com/kata/53670c5867e9f2222f000225/train/javascript

function isOrthogonal(u,v) {

  let dotProduct = 0;

  for (let i=0;i<u.length;i++) {
    dotProduct += u[i]*v[i];
  }

  return dotProduct === 0;
}

console.log(isOrthogonal([1,-2],[2,1])) //true