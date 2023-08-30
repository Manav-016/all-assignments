/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;

  let str_to_consider = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for (let iterator = 0; iterator <= str_to_consider.length/2; iterator++) {
    if (str_to_consider[iterator] !== str_to_consider[str_to_consider.length - iterator - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
