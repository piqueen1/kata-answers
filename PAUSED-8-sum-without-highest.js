function sumArray(array) {
	const max = Math.max(...array);
	const min = Math.min(...array);
	let fixedArray = [];

	fixedArray = array.filter (function(number) {
		return number !== max && number !== min;
	});

	fixedArray.reduce(function(sum, value) {
		return sum + value;
	}, 0);
}