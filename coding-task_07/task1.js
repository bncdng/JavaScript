// *****************************************
// TODO: Implement the removeItem function

// The first parameter is an array.
// The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
// Remove the item and return an array.
// Ensure that the original array was not mutated.

function removeItem(arr, num) {
    const newArr = arr.slice();
    newArr.splice(num - 1, 1);
  
    return newArr;
  }
  
  const animals = ["Dog", "Cat", "Lion"];
  console.log(removeItem(animals, 1));
  // result should be: ["Cat", "Lion"]
  
  console.log(animals);
  // result should be still: ["Dog", "Cat", "Lion"]
  
  const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
  console.log(removeItem(fruits, 3));
  // result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
  
  console.log(fruits);
  // result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]



  let sum = 0;
  if (typeof arr === "string") {
    
  }

  
  return sum;