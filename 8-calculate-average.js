function find_average(array) {
	sum = array.reduce(function(sum, value) {
		return sum + value;
	}, 0);
	return sum/array.length;
}

