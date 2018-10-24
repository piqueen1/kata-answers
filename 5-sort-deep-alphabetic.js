// https://www.codewars.com/kata/sort-one-three-two/train/javascript

//FAVORE SOLUTION, NOT MINE:
const sortByName = arr => {
  const words = {};
  arr.forEach(n => words[n] = num2word(n));
  return arr.sort((a, b) => words[a].localeCompare(words[b]));
};

function num2word(n) {
  var a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var b = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  if (n >= 0 && n < 20) return a[n];
  if (n >= 20 && n < 100) return b[Math.floor(n / 10) - 2] + (n % 10 ? '-' + a[n % 10] : '');
  if (n >= 100 && n < 1000) return a[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + num2word(n % 100) : '');
  return num2word(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + num2word(n % 1000) : '');
}

// PROBLEM WITH MINE: how to deal with the space between number and hundred?  Now puts 999 before 9

console.log('***start***');

function sortByName(ary) {
  let keyValuePairs = [];
  const wordArray = ary.map(x => numToWords(x));

  //make an array of word / digit pairs
  for (let i=0; i<wordArray.length; i++) {
    const current = wordArray[i];

    let onePair = [current, ary[i] ];

    keyValuePairs.push(onePair);
  }

  //sort word / digit pairs by word
  const sortedArray = keyValuePairs.sort();
  let finalArray = [];

  //create array of just digits after they've been sorted by words
  for (let j=0; j<keyValuePairs.length; j++) {
    finalArray.push(keyValuePairs[j][1]);
  }

  return finalArray;
}

function numToWords(number) {
  //Validates the number input and makes it a string
  if (typeof number === 'string') {
    number = parseInt(number, 10);
  }
  if (typeof number === 'number' && !isNaN(number) && isFinite(number)) {
    number = number.toString(10);
  }
  else {
    return 'This is not a valid number';
  }

  //Creates an array with the number's digits and
  //adds the necessary amount of 0 to make it fully 
  //divisible by 3
  var digits = number.split('');
  var digitsNeeded = 3 - digits.length % 3;
  if (digitsNeeded !== 3) { //prevents this : (123) ---> (000123) 
    while (digitsNeeded > 0) {
      digits.unshift('0');
      digitsNeeded--;
    }
  }

  //Groups the digits in groups of three
  var digitsGroup = [];
  var numberOfGroups = digits.length / 3;
  for (var i = 0; i < numberOfGroups; i++) {
    digitsGroup[i] = digits.splice(0, 3);
  }

  //Change the group's numerical values to text
  var digitsGroupLen = digitsGroup.length;
  var numTxt = [
    [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], //hundreds
    [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'], //tens
    [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] //ones
  ];
  var tenthsDifferent = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  // j maps the groups in the digitsGroup
  // k maps the element's position in the group to the numTxt equivalent
  // k values: 0 = hundreds, 1 = tens, 2 = ones
  for (var j = 0; j < digitsGroupLen; j++) {
    for (var k = 0; k < 3; k++) {
      var currentValue = digitsGroup[j][k];
      digitsGroup[j][k] = numTxt[k][currentValue]
      if (k === 0 && currentValue !== '0') { // !==0 avoids creating a string "null hundred"
        digitsGroup[j][k] += ' hundred ';
      }
      else if (k === 1 && currentValue === '1') { //Changes the value in the tens place and erases the value in the ones place
        digitsGroup[j][k] = tenthsDifferent[digitsGroup[j][2]];
        digitsGroup[j][2] = 0; //Sets to null. Because it sets the next k to be evaluated, setting this to null doesn't work.
      }
    }
  }

  //Adds '-' for grammar, cleans all null values, joins the group's elements into a string
  for (var l = 0; l < digitsGroupLen; l++) {
    if (digitsGroup[l][1] && digitsGroup[l][2]) {
      digitsGroup[l][1] += '-';
    }
    digitsGroup[l].filter(function (e) { return e !== null });
    digitsGroup[l] = digitsGroup[l].join('');
  }

  // //Adds thousand, millions, billion and etc to the respective string.
  // var posfix = [null, 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion'];
  // if (digitsGroupLen > 1) {
  //   var posfixRange = posfix.splice(0, digitsGroupLen).reverse();
  //   for (var m = 0; m < digitsGroupLen - 1; m++) { //'-1' prevents adding a null posfix to the last group
  //     if (digitsGroup[m]) { // avoids 10000000 being read (one billion million)
  //       digitsGroup[m] += ' ' + posfixRange[m];
  //     }
  //   }
  // }

  //Joins all the string into one and returns it
  return digitsGroup.join(' ')

  // const table = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  // // map digits to strings
  // const strings = ary.map(x => table[x]);

  // return strings.sort();
}

console.log(sortByName([9, 99, 999])); // [9, 999, 99]
console.log('*** end ***');
