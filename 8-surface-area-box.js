function getSize(w, h, d){
	const answer = [];

	if (typeof w === 'number' 
		&& typeof h === 'number'
		&& typeof d === 'number') {
		answer.push(2*w*h + 2*w*d + 2*h*d);
		answer.push(w*h*d);
		return answer;
	} else {
		return false;
	}
}



// volume == length*width*height
// area == 2LW + 2LH + 2WH