function describeAge(n) {
	return `You're a(n) ${ n <= 12 ? 'kid' 
		: n >= 13 && n <= 17 ? 'teenager'
		: n >= 18 && n <= 64 ? 'adult'
		: 	'elderly'	
		}`;
}

TASK: GET THIS DOWN TO 137 characters, currently 159