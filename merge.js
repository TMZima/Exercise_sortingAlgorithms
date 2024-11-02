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

function mergeSort() {}

module.exports = { merge, mergeSort };
