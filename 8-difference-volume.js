// https://www.codewars.com/kata/difference-of-volumes-of-cuboids/train/javascript

function findDifference(a, b) {
    return Math.abs(a.reduce((p,x) => p*x)-b.reduce((p,x) => p*x));
  }
