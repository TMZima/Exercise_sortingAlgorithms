// Bubble Sort Function:
// Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
// Time complexity: O(n^2)
// Space complexity: O(1)

// Bubble Sort Psuedocode:
// 1. Loop through an array with a variable called i from the beginning of the array to the end of the array.
// 2. Use and inner loop to iterate through the array with a variable called j from the beginning of the array to the end of the array minus i minus 1.
// 3. If the value of arr[j] is greater than the value of arr[j + 1], swap the values of arr[j] and arr[j + 1].
// 4. Return the sorted array.

// Implement the bubbleSort function that takes an array of numbers and returns a sorted array after using the bubble sort algorithm.

function bubbleSort(arr) {
  // Loop through an array with a variable called i from the beginning of the array to the end of the array.
  for (let i = 0; i < arr.length; i++) {
    // Use and inner loop to iterate through the array with a variable called j from the beginning of the array to the end of the array minus i minus 1.
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      // If the value of arr[j] is greater than the value of arr[j + 1], swap the values of arr[j] and arr[j + 1].
      if (arr[j] > arr[j + 1]) {
        // Swap the values of arr[j] and arr[j + 1].
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If no swaps are needed, break out of the loop.
    if (!swapped) {
      break;
    }
  }
  // Return the sorted array.
  return arr;
}

// Test cases
const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
// console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342].
module.exports = bubbleSort;
