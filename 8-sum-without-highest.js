function sumArray(array) {
	if (!array) {
		return 0;
	}
	if (array.length <= 1) {
		return 0
	}

	const max = Math.max(...array);
	const maxIndex = array.indexOf(max);
	const min = Math.min(...array);
	const minIndex = array.indexOf(min);
	let fixedArray = [];


	fixedArray = array.filter (function(number, index) {
		return index !== maxIndex && index !== minIndex;
	});

	return fixedArray.reduce(function(sum, value) {
		return sum + value;
	}, 0);

}