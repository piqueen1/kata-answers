function sortByLength(array) {
	const sorted = array.sort(function(a, b) {
		return a.length - b.length;
	});
	return sorted;
};

//ES6: return array.sort((a,b) => a.length - b.length);