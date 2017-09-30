function comp(array1, array2){
  /*
  0) if [], other one has to be [] or false
  0.5) if null, return false
  1) create new array = square of the elements in array 1
  2) sort by ascending
  3) sort array2 ascending
  4) see if arrays are identical
	*/

//  0.5) if either is null, return false
	if (!array1 || !array2) {
		return false;
	};
//  0) if either is [], other one has to be [] or false
	if (array1.length === 0 && array2.length !== 0) {
		return false;
	}
	if (array2.length === 0 && array1.length!== 0) {
		return false;
	}


	//new array w/squared elements of array1
	const squared1 = array1.map(function(number) {
		return number * number;
	});
	//sort new array
	const squared1sorted = squared1.sort(function(a,b) {
		return a - b;
	});
	//sort array2
	const array2sorted = array2.sort(function(a,b) {
		return a - b;
	});
	//check for equality
	if (squared1sorted.toString() === array2sorted.toString()) {
		return true;
	}
	return false;
}

