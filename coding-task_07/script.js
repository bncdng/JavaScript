// *****************************************
// TODO: Implement the sumOfCharacters function

// The function has one parameter, which is an array.
//  Check the type of each array entry. If it's a string then store the count of characters.
//  The function returns the total sum of all characters.

function sumOfCharacters(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    }
  }

  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
