function getFibonacci(n) {
 /*
 1) if n is not an integer between 0 and 2000, return -1
 2) for each number until n,
 	add [n-2] to [n-1] in order to get current n
 3) continue until n (return n)
 */

 // if n is not an integer between 0 and 2000
	let valueAtN = 0;
	let sequence = [0, 1, 1];

	if (!Number.isInteger(n) || n <= 0 || n > 2000) {
		return '-1';
	}
    
    if (n === 0){
    	return '0';
  	};
  
  	if (n === 1){
    	return '1';
  	}

  	for (let i = 2; i <= n; i++) {
	    let current = sequence[i];
    	let nextValue = current + sequence[i - 1];
    	sequence.push(nextValue);
	}
	valueAtN = sequence[n];

	return valueAtN.toString();
}