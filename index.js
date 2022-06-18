function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;

  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode heres
*/

/*
  Add written explanation of your solution here

function isPalindrome(word) {}  // program to check if the string is palindrome or not
 
const len = word.length; // find the length of a string

for (let i = 0; i < len / 2; i++) {} // loop through half of the string

      // check if first and last string are same
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
