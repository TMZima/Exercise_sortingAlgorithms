// Pivot:
// The pivot helper function is the main idea of the quick sort algorithm. It's used to help with the partitioning of the array elements. The pivot function will help to designate a single element as the pivot point, and then rearrange the elements in the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. The order of the elements on either side of the pivot doesn't matter! The pivot function should do this in place, that is, it should not create a new array. When complete, the pivot function should return the index of the pivot value.

// From exercise: Responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up the the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.
// For example: if we decide the pivot will always be the first element in the array, it should behave in the following way:
// let arr = [4,2,5,3,6];
// pivot(arr); // 2
// arr; // [3,2,4,5,6]
// In this code, the specifics of how the arr variable gets mutated are not important. All that matters is that 4 winds up at index 2, with 3 and 2 to the left of it (in any order), and 5 and 6 to the right of it (in any order).

// Pseudocode:
// - It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
// - Grab the pivot from the start of the array.
// - Store the current pivot index in a variable (this will keep track of where the pivot should end up).
// - Loop through the array from the start until the end.
//     - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// - Swap the starting element (i.e. the pivot) with the pivot index.
// - Return the pivot index.

// Time complexity: O(n)
// Space complexity: O(1)
function pivot(arr, start = 0, end = arr.length - 1) {
  // Helper function to swap elements in an array.
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  //  Grab the pivot from the start of the array.
  // Store the current pivot index in a variable (this will keep track of where the pivot should end up).
  let pivot = arr[start];
  let swapIndex = start;
  // Loop through the array from the start until the end.
  for (let i = start + 1; i <= end; i++) {
    // If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  // Swap the starting element (i.e. the pivot) with the pivot index.
  swap(arr, start, swapIndex);
  // Return the pivot index.
  return swapIndex;
}

// Test cases:

// const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
// const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

// pivot(arr1); // 3
// pivot(arr2); // 4

// arr1.slice(0, 3).sort((a, b) => a - b); // [2,3,4]
// arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]

// arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
// arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]

// quickSort:
// The quickSort function is the main function that implements the quick sort algorithm. It will use the pivot helper function to help with the partitioning of the array elements. The quickSort function will recursively call itself on the left and right side of the pivot until the entire array is sorted. The quickSort function should return the sorted array.

// Pseudocode:
// - Pick an element in the array and designate it as the "pivot". While there are many ways to choose the pivot, we'll use the first element in this case. This isn't normally the best choice, but it makes the code easier to understand.
// - Next, compare every other element in the array to the pivot.
// - If it's less than the pivot, move it to the left of the pivot.
// - If it's greater, move it to the right.
// - Once you have finished comparing, the pivot will be in the right place.
// - Next, recursively call the quickSort again with the left and right halves from the pivot until the array is sorted.

// Time complexity: O(n log n) - best and average case, O(n^2) - worst case
// Space complexity: O(log n) - best and average case, O(n) - worst case

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // Recursively call the quickSort again with the left and right halves from the pivot until the array is sorted.
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// Test cases:

quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
quickSort([1, 2, 3]); // [1, 2, 3]
quickSort([]); // []

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
