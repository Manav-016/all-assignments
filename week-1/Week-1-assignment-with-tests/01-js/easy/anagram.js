/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  /**
   * SOLUTION 1:
   * 
   * return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
   */

  //SOLUTION 2:

  let str1_char_freq = Array(256).fill(0), str2_char_freq = Array(256).fill(0), str1_trimmed = str1.replace(/ /g, ""), str2_trimmed = str2.replace(/ /g, "");

  str1_trimmed.toLowerCase().split("").forEach(char => {
    let charCode = char.charCodeAt(0);
    str1_char_freq[charCode] = str1_char_freq[charCode] + 1;
  });

  str2_trimmed.toLowerCase().split("").forEach(char => {
    let charCode = char.charCodeAt(0);
    str2_char_freq[charCode] = str2_char_freq[charCode] + 1;
  });

  return str1_char_freq.toString() === str2_char_freq.toString();

}

module.exports = isAnagram;
