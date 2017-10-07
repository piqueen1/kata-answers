function ìsZeroBalanced(array){
/* 
1) [] returns false
2) if sum = 0,
3) for each positive number,
4) check that there exists a negative equivalent
*/
	const copyArray = array;

	if (Array.isArray(array) && array.length === 0) {
		return false;
	}

	const sum = array.reduce(function(sum, value) {
		return sum + value;
	}, 0);

	if (sum !== 0) {
		return false;
	}

	for (let i = 0; i < copyArray.length; i++) {
		const number = copyArray[i];

		if (number === 0) {
			continue;
		}

		//check for matching +/- value
		//if indexOf returns -1 then it's false
		// Kelson: BUT WHAT IF IT SHOULD BE -1????
		if(copyArray.indexOf(-1 * number) 
			&& copyArray.indexOf(-1 * number) !== -1) {
			// remove both from copy array (splice?)
			copyArray.splice(number, 1);
			copyArray.splice(copyArray.indexOf(-1 * number));

			continue;
		} else {
			return false;
		}
	}
	return true;
}


// failed:
// [ 0, 1, 2, 3, 4, 0, -2, -1, -4, -3 ] expected true
// [ -3, 2, 1, 3, -1, -2 ] expected true
// [ 1, -1, 2, -2, 3, -3, 0 ] expected true