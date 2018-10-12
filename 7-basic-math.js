// https://www.codewars.com/kata/basic-math-add-or-subtract/train/javascript

console.log('***start***');

function calculate(str) {
  const replaced = str.replace(/plus/g,' + ').replace(/minus/g,' - ');

  return eval(replaced).toString();
}

console.log(calculate("1plus2plus3plus4")); // '10'
console.log('*** end ***');
