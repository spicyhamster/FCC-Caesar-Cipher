//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {

  var newStr = "";
  var lett = 0;
  for (i=0; i<str.length; i++) {
    lett = str.charCodeAt(i);
    if(lett > 64 && lett < 78) {
        newStr += String.fromCharCode(lett+13);
    } else if(lett <=90 && lett >=78) {
      newStr += String.fromCharCode(lett-13);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); //should decode to "FREE PIZZA!"
