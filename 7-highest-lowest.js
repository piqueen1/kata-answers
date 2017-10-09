function highAndLow(numbers){
  /*
  1) turn string to array by ' '
  2) push Math.max to new array
  3) push Math.min
  4) join them with a space between
  5) return joined array
  */
	//turn string to array by ' '
	const reallyNumbers = numbers.split(' ').map(Number);
	let newArray = [];
	const max = reallyNumbers.reduce(function(a, b) {
    return Math.max(a, b);
	});
	const min = reallyNumbers.reduce(function(a, b) {
    return Math.min(a, b);
	});

	newArray.push(max, min);
	const finalString = newArray.join(' ');
	return finalString; 
}

//could have done:
//return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);