function _if(bool, func1, func2) {
  if (bool) {
  	func1();
  	return;
  }
  func2();
}