//**************************************************
// TODO: Implement the oddNumbers function

// The function has two parameters, both are numbers.
// Iterate over all numbers between first number and the second number.
// Store all oddNumbers in string, seperated by a comma and return the string.
// Allowed are only positive numbers, add a check.

//******************** Meine Funktion ******************************
// function oddNumbers(num1, num2) {
//   const oddNum = []; // Initialize an empty array to store odd numbers
//   // Iterate through each number from num1 to num2
//   for (let i = num1; i <= num2; i++) {
//     // Check if the current number is odd
//     if (i % 2 != 0) {
//       // If the number is odd, add it to the oddNum array
//       oddNum.push(i);
//     }
//   }
//   // Join the odd numbers into a comma-separated string and return it
//   return oddNum.join(",");
// }

// console.log(oddNumbers(0, 4));
// // result should be: 1,3

// console.log(oddNumbers(10, 33));
// // result should be: 11,13,15,17,19,21,23,25,27,29,31,33

// console.log(oddNumbers(9, 12));
// // result should be: 9,11

//****************** Gemeinsame Funktion ********************************

function oddNumbers(num1, num2) {
  let result = "";
  for (let i = num1; i < num2; i++) {
    if (i % 2 !== 0) {
      result += i + ",";
    }
  }
  console.log(num1, num2);
  return result;
}

//**************************************************
// TODO: Implement the charCount function

// The function has a first parameter for a word which is a string.
// The function has a second parameter which contains the character to search for which is a string.
// Check if the second parameter consists of only one character, if not, quit the function.
// The function returns the number of times the character from the second parameter is present in the word.
// The function should be case insensitive.

function charCount(word, char) {
  let count = 0; // Initialize a variable 'count' to store the count of occurrences of the character
  for (let i = 0; i < word.length; i++) {
    // Iterate through each character in the 'word' string

    if (word[i] === char) {
      // Check if the current character matches the 'char' parameter
      count++; // If a match is found, increment the 'count' variable
    }
  }
  return count; // Return the total count of occurrences of the character in the word
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
