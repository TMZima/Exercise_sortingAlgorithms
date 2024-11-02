// Selection Sort:
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

// Here is some guidance for how selection sort should work:
// Assign the first element to be the smallest value you’ve seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

// Pseudocode:
// Store the first element as the smallest value you’ve seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(arr) {
  // Loop through the array.
  for (let i = 0; i < arr.length; i++) {
    // Set the current index as the minimum value.
    let min = i;
    // Loop through the array again to compare the current index with the next index.
    for (let j = i + 1; j < arr.length; j++) {
      // If the next index is smaller than the current index, set the next index as the minimum value.
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // If the minimum value is not the current index, swap the two values.
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  // Return the sorted array.
  return arr;
}

// Test cases:

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]); // []

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
]; // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

module.exports = selectionSort;
