function isPalindrome(word) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the reversed string with the original string
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

/* 
  Add your pseudocode here
  the function accepts a word when it is called as it
  s argument and uses the word to make the checks

  it checks if it's the same both when going forward and back wards and returns true or false
  
*/

/*
  Add written explanation of your solution here
  the function takes in the word we want to check and then will do something with it

  it then removes non-alphanumeric characters and convert to lowercase

  then it splits it and reverses it and joins, then it compares it to the result to the word then returns true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("test"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
