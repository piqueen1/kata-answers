function capital(capitals){
  let phraseArray = [];
  let properties = Object.getOwnPropertyNames(capitals);
  //NEXT: reference each value, not each key
  
  for (let i=0;i<capitals.length;i++) {
    const capitol = capitals[i].capital;
    phraseArray.push(`The capitol of this entity is ${capitol}`);
  };
  
  return properties;
}

console.log(capital( [{state: 'Maine', capital: 'Augusta'}][0])) //, "The capital of Maine is Augusta")