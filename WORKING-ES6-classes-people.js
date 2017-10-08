class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  //this is just a method
  sayFullName() {
    return this.firstName + ' ' + this.lastName;
  }
  
  //this is supposed to be a "class method"
  greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
}
