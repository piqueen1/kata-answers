function head(array) {
	return array[0];
}

function tail(array) {
	return array.filter(function(number, index){
		return index !== 0;
	});
}

function init(array) {
	return array.filter(function(number, index){
		return index !== array.length-1;
	});
}

function last(array) {
	return array[array.length-1];
}
