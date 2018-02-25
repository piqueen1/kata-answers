// https://www.codewars.com/kata/csv-representation-of-array

console.log('*****Program start*****');
function toCsvText(array) {
  return array.reduce(function (finalString, innerArray, index) {
  	if (index === 0) {
      finalString = `${innerArray}`
    }
    if (index !== 0) {
    	finalString = `${finalString}\n${innerArray}`
    }
    return finalString;
  }, '')
}

const answer = toCsvText([
                                [ 0, 1, 2, 3, 45 ],
                                [ 10,11,12,13,14 ],
                                [ 20,21,22,23,24 ],
                                [ 30,31,32,33,34 ]
                               ] );
console.log('Answer: ', answer);
console.log('******Program end******');
