//https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

function greet(language) {
  const key = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  if (language && key[language]){
    return key[language]
  } else {
    return 'Welcome'
  }

  //  return language in welcomes ? welcomes[language] : welcomes.english;
}

console.log(greet('irish')) // 'Welcome'