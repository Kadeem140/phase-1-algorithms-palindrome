function isPalindrome(word) {
  // Write your algorithm here
  let splitWord = word.split("");
  let reverseWord = splitWord.reverse();
  let joinedWord = reverseWord.join("");

  if (word == joinedWord){
    return `${word} is a not Plaindrome!`, true
  }
    else{
      return `${word} is a not Plaindrome!`
    }
}

/* 
  Add your pseudocode here
*/ //1. Split the given string and assign to variable
  //2. Reverse variable from step 1 and assign to variable
  //3. join varaible form step 2 and assign to variable
  //4. Compare first string with variable from step 3, if statement, if it matches return it.
  
/*
  Add written explanation of your solution here
// */
// We need to check if a given string's value is identical to itself 
  //  if it as flipped the other way.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
