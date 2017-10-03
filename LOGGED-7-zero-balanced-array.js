function ìsZeroBalanced(array){
/* 
1) [] returns false
2) if sum = 0,
3) for each positive number,
4) check that there exists a negative equivalent
*/

	if (array = []) {
		return false;
	}

	let sum = array.reduce(function(sum, value) {
		return sum + value;
	}, 0);

	if (sum !== 0) {
		return false;
	}

	for (let i = 0; i < array.length; i++) {
		number = array[i];
		
		if (number = 0) {
			continue;
		}

		if (number > 0) {
			if (array.forEach(number => -number)) {
				continue;
		} else {
			return false;
		}
	}
	return true;
}