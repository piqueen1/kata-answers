function squareOrSquareRoot(array) {
	return array.map(function(number) {
		if (Math.sqrt(number) % 1 === 0) {
			return Math.sqrt(number)
		}
		return number * number;
	});  
}