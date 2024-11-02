// Merge: Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with both of the arrays merged together. This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
// Also, do not use the built-in .sort method! We're going to use this function to implement a sort, so the helper function merge should be efficient.

// Psuedocode:

// Create an empty array, results.
// Create two pointers, i and j, starting at the beginning of arr1 and arr2.
// While there are still elements in both arrays:
// - If the first element of the first array is less than the first element of the second array, push the first element of the first array into results.
// - If the first element of the first array is greater than the first element of the second array, push the first element of the second array into results.
// - If there is only one array with elements left, push all the elements into results.
// Return results.

// Time complexity: O(n + m)
// Space complexity: O(n + m)

function merge(arr1, arr2) {
  // Create an empty array, results.
  let results = [];
  // Create two pointers, i and j, starting at the beginning of
  let i = 0;
  let j = 0;
  // While there are still elements in both arrays:
  while (i < arr1.length && j < arr2.length) {
    // - If the first element of the first array is less than the first element of the second array, push the first element of the first array into results.
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      // - If the first element of the first array is greater than the first element of the second array, push the first element of the second array into results.
      results.push(arr2[j]);
      j++;
    }
  }
  // - If arr1 is the only array with elements left, push all the elements remaining in arr1 into results.
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // - If arr2 is the only array with elements left, push all the elements remaining in arr2 into results.
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // Return results.
  return results;
}

// Test cases:

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
merge(arr1, arr2); // [1,2,3,4,4,5,6,8]

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
merge(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3, 4, 5];
let arr6 = [1, 2];
merge(arr5, arr6); // [1,2,3,4,5]

// mergeSort function:

// Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. Here's some guidance for how merge sort should work:
// Break up the array into halves until you can compare one value with another.
// Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array.
// Once the array has been merged back together, return the merged (and sorted!) array.

// This will be a recursive function!

// Psuedocode:
// Break up the array into halves until you can compare one value with another.
// - Base case: if the array length is less than or equal to 1, return the array.
// - Find the middle point of the array.
// - Slice the array into left and right halves.
// - Call mergeSort recursively on the left half.
// - Call mergeSort recursively on the right half.
// - Return the merge of the left and right halves.

// Time complexity: O(n log n)
// Space complexity: O(n)

function mergeSort(arr) {
  // Base case: if the array length is less than or equal to 1, return the array.
  if (arr.length <= 1) return arr;
  // Find the middle point of the array.
  let mid = Math.floor(arr.length / 2);
  // Slice the array into left and right halves.
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // Return the merge of the left and right halves.
  return merge(left, right);
}

// Test cases:

mergeSort([4, 20, 12, 10, 7, 9]); // [4,7,9,10,12,20]
mergeSort([0, -10, 7, 4]); // [-10,0,4,7]
mergeSort([1, 2, 3]); // [1,2,3]
mergeSort([]); // []

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];

module.exports = { merge, mergeSort };
