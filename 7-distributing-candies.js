// https://www.codewars.com/kata/distributing-candies-fairly/train/javascript

console.log('***start***');

function distribute(m, n) {
  console.log(m, n);
  //if num of kids (n) is 0 or less, return []
  if (n <= 0) {
    return [];
  }

  //set variable to start number for all elements
  let allStartWith = Math.floor(m / n);
  let getOneMore = m % n;
  let answerArray = [];

  if (m <= 0) {
    allStartWith = 0;
    getOneMore = 0;
  }

  //create an array with just 'all start with' elements
  for (i = 0; i < n - getOneMore; i++) {
    answerArray.push(allStartWith);
  }

  //add getOneMore elements
  for (i = 0; i < getOneMore; i++) {
    answerArray.push(allStartWith + 1);
  }

  return answerArray;
}

console.log(distribute(-5, 10)); // [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
console.log('*** end ***');

/* My favorite solution:
function distribute(m, n) {

if (m < 0) { m =0; }
if (n <=0) return [];

  var candysForSure = Math.floor(m / n);
  var candysLeft = m % n;
  var kids = new Array(n).fill(candysForSure);

  for (var i=0; i < candysLeft; i++){
    kids[i]++;
  }


  return kids;
}
*/
