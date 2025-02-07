// Write your code here

// 1)push()
// 2)shift()
// 3)splice-start,deletecount items,so array by adding or removing elements
slice-start,end
// 4)array.length
// 5)array.includes
// 6)[1,10,2]
// 7)const copy or array.slice
// 8)array.reverse
// 9)array1,array2
// 10)row,column

// 1. Create an array of numbers from 1 to 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Access the third element in the array
console.log("Third element:", numbers[2]);

// 3. Change the value of the fifth element to 15
numbers[4] = 15;
console.log("Updated array:", numbers);

// 4. Add a number at the end of the array
numbers.push(11);
console.log("After adding an element:", numbers);

// 5. Remove the first element from the array
numbers.shift();
console.log("After removing the first element:", numbers);
// 1. Create a 2D array representing a grid
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 2. Access a specific element in the grid
console.log("Element at [1][2]:", grid[1][2]);

// 3. Modify an element in the grid
grid[2][0] = 99;
console.log("Modified grid:", grid);
// 1. Create an array with 4 elements
let arr = [10, 20, 30, 40];

// 2. Extract the first and second elements into variables
let [first, second] = array;
console.log("First:", first, "Second:", second);

// 3. Swap the values of two variables using array destructuring
[first, second] = [second, first];
console.log("Swapped values:", "First:", first, "Second:", second);
// 1. Create two arrays of numbers
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// 2. Combine the two arrays using concat
let combined = array1.concat(array2);
console.log("Combined using concat:", combined);

// 3. Combine using the spread operator
let combinedSpread = [...array1, ...array2];
console.log("Combined using spread operator:", combinedSpread);
// 1. Create an array of numbers
let numArray = [5, 3, 8, 1, 9];

// 2. Reverse the array
numArray.reverse();
console.log("Reversed array:", numArray);

// 3. Sort the array in descending order
numArray.sort((a, b) => b - a);
console.log("Descending order:", numArray);