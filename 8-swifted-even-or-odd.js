function even_or_odd(number) {
  if (number % 2 === 0) {
  	return 'Even';
  }
  return 'Odd';
}

/* in Swift
func evenOrOdd(_ number:Int) -> String {
  return number % 2 == 0 ? "Even" : "Odd"
}

or mine:
func evenOrOdd(_ number:Int) -> String {
  if number % 2 == 0 {
      return "Even"
  } else {
      return "Odd"
  }
}