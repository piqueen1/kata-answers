//https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript

function capital(capitals){
  let phraseArray = [];

  for (let i=0;i<capitals.length;i++) {
    const name = Object.values(capitals[i])[0];
    const capitol = Object.values(capitals[i])[1];
    phraseArray.push(`The capital of ${name} is ${capitol}`);
  };

  return phraseArray;
}

console.log(capital( [{state: 'Maine', capital: 'Augusta'}][0])) //, "The capital of Mai
