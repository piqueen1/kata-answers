function evensAndOdds(num){
	// check if number is even or odd
	// if even, convert to binary
	// if odd, convert to hex
	if (num % 2 === 0){
		return num.toString(2);
	}
	return num.toString(16);
}