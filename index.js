function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    let j = string.length - 1 - i
    const startChar = string[i]
    const endChar = string[j]
    if (startChar !== endChar) return false
  }
  return true 
  // const reversedString = reverseWord(string)
  // return string === reversedString
}

// function reverseWord (string) {
  // const wordArray = word.split('')
  // const reverseWordArray = wordArray.reverse()
  // const reveredWord = reverseWordArray.join('')
  // return reveredWord
//   return string.split('').reverse().join('')
// }

/* 
  iterate from the beggining to the middle of the word
  check each letter to the corresponding letter from the end
  if any letters dont match, return false
  if we make it to the middle return true

  Add your pseudocode here
  input mom === mom // true
  input abc === cba // false
  reverse the string input
  then check if input is same as reversed input
  make a function that if the word entered is a palindrome return true, else return false
  that means if the word is the same as the word in reverse, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("goober"));
}

module.exports = isPalindrome;
