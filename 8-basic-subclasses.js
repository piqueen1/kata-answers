//https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript

class God{
/**
 * @returns Human[]
 * 
 */
  static create(){
    const Adam = new Man();
    const Eve = new Woman();
    return [Adam, Eve];
  }
}

class Human {
  constructor() {}
}

class Man extends Human {
  constructor() {
    super();
  }
}
class Woman extends Human {
  constructor() {
    super();
  }
}