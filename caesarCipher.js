function cipher(string) {
  let plainText = string;
  let key = 3;
  let ciphered = "";
  let re = /[A-Za-z0-9,.;'!?:()[\]@#$%^<>&*\/]/;
  for (let i = 0; i < plainText.length; i++) {
    if (re.test(plainText.charAt(i))) {
      ciphered += String.fromCharCode(plainText.charCodeAt(i) + key);
    } else {
      return ciphered;
    }
  }
  return ciphered;
}

// function decipher(string) {
//   let cipheredText = string;
//   let key = 3;
//   solvedText = "";
//   let re = /[A-Za-z0-9,.;'!?:(){}[\]@#$%^<>&*\/]/;
//   for (i = 0; i < cipheredText.length; i++) {
//     if (re.test(cipheredText.charAt(i))) {
//       solvedText += String.fromCharCode(cipheredText.charCodeAt(i) - key);
//     } else {
//       console.log("Error!");
//     }
//   }
//   console.log(solvedText);
//   return solvedText;
// }

cipher("~");

//decipher("Erud4567$/1");

module.exports = cipher;
