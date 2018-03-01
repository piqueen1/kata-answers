// https://www.codewars.com/kata/string-cleaning/train/javascript
// remove numbers only from a string

function stringClean(s){
    return s.replace(/[0-9]/g, '');
  }

/*  Test.assertEquals(stringClean("! !"), "! !")
  Test.assertEquals(stringClean("123456789"), "")
  Test.assertEquals(stringClean("(E3at m2e2!!)"), "(Eat me!!)") */