// https://www.codewars.com/kata/method-for-counting-total-occurence-of-specific-digits/train/javascript

console.log('***start***');

// function List() {
//   this.countSpecDigits = function (integersList, digitsList) {
//     let tuples = [];
//     let count = 0;
//     for (var i=0; i<integersList.length; i++) {
//       console.log(i);
//       const wholeNum = integersList[i];
//       const arr = wholeNum.toString().split('');
//       // console.log(arr);
//       // console.log(typeof arr);
//       for (var j=0; j<digitsList.length; j++) {
//         for (var k=0; k<arr.length; k++) {
//           if (digitsList[i] === arr[k]) {
//             count++;
//             // console.log(digitsList[i]);
//           }
//         }
//       }
//       tuples.push([digitsList[i],count]);
//     }
//     return tuples;
//   }
// }

let l = new List();
console.log(l.countSpecDigits([-18, -31, 81, -19, 111, -888][1, 8, 4])); // [[1, 7], [8, 5], [4, 0]]
console.log('*** end ***');

MY FAVORITE ANSWER:
function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    var result = [];
    for (var i = 0; i < digitsList.length; i++) {
      result.push([digitsList[i], integersList.join().split(digitsList[i]).length - 1]);
    }
    return result;
  }
}