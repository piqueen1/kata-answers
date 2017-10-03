function capMe(names) {
	/*
	1) put it all in lowercase
	2) map it: first letter capitalized
	*/

	const lowerNames = names.map(function(name) {
		return name.toLowerCase();
	});

	return lowerNames.map(function(name) {
		return name.charAt(0).toUpperCase() + name.slice(1);
	});
}