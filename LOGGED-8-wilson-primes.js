function amIWilson(p) {
  function factorial(num){
    // If the number is less than 0, reject it.  
    if (num < 0) {  
        return -1;  
    }  
    // If the number is 0, its factorial is 1.  
    else if (num == 0) {  
        return 1;  
    }  
    var tmp = num;  
    while (num-- > 2) {  
        tmp *= num;  
    }  
    return tmp;  
  }

  const num = p - 1;

    if (Number.isInteger(((factorial(num) + 1) / p * p))) {
        return true;
    } else {
        return false;
    }

}  

//((P-1)! + 1) / (P * P)
