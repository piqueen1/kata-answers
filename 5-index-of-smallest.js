//TRY AGAIN: https://www.codewars.com/kata/find-the-smallest/

console.log('*****Program start*****');
function smallest(n) {
	const stringArray = ('' + n).split('');
	let numberArray = stringArray.map(Number);
	const min = Math.min(...numberArray);
	const lowestIndex = numberArray.indexOf(min);
	let testArray = [];
	let insertIndex = 0;
	let smallestBigNumber = 0;

	//remove (leftmost?) min value from array. Can't reassign to new variable or it returns [1]
	numberArray.splice(lowestIndex, 1);
	testArray = numberArray;
	console.log('Array without min: ', testArray);

	//NEXT:
	//find value when min is inserted at i=0.  Save product to smallest and index to lowestIndex
	//do same at i=1.  If new number is smaller than smallest, replace it and index
	for (var i = 0; i <= numberArray.length; i++) {
		const value = numberArray[i];


		if (min <= value) {
			numberArray.splice(i, 0, min);
			insertIndex = i;
			break;
		}
	}

	const finalNumber = parseInt(numberArray.join(''));
	let finalArray = [finalNumber, lowestIndex, insertIndex];
	return finalArray;
}

const answer = smallest(261235); //[126235, 2, 0]
console.log('Answer: ', answer);
console.log('******Program end******');

//Instructions:
// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this 
// digit d to have the smallest number.

//Plan:
//*Make an array of the number
//*Determine the index and value of the lowest digit
//*Erase that index
//Move it to the index of the first value greater than or equal to it 
//Join the array into a string and turn it into a number
//Make an array of the number variable,
//	the index of its origin and its final index