// Radix Sort:
// Write a function called radixSort which accepts an array of numbers and sorts them in ascending order.

// Pseudocode:
// Define a function called radixSort which accepts an array of numbers.
// Find the maximum number of digits in the largest number in the list.
// Loop from k = 0 up to this largest number of digits.
// For each iteration of the loop:
// Create buckets for each digit (0 to 9).
// Place each number in the corresponding bucket based on its kth digit.
// Replace our existing array with values in our buckets, starting with 0 and going up to 9.
// Return the list at the end!

// Time Complexity: O(nk) - n is the length of the list and k is the number of digits in the largest number.
// Space Complexity: O(n + k)

// Helper functions:
// getDigit(num, i): returns the digit in num at the given place value.
function getDigit(num, i) {
  // Math.abs(num) returns the absolute value of a number.
  // Math.pow(10, i) returns the base to the exponent power.
  // Math.floor() returns the largest integer less than or equal to a given number.
  // % 10 returns the remainder of the division of num by 10.
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount(num): returns the number of digits in num.
// If num is 0, return 1.
// Otherwise, return the floor of the base 10 logarithm of the absolute value of num plus 1.
function digitCount(num) {
  if (num === 0) return 1;
  // Math.log10() returns the base 10 logarithm of a number.
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits(nums): Given an array of numbers, returns the number of digits in the largest numbers in the list.
function mostDigits(nums) {
  // Initialize maxDigits to 0.
  let maxDigits = 0;
  // Loop through the numbers in the list.
  for (let i = 0; i < nums.length; i++) {
    // Set maxDigits to the maximum of maxDigits and the number of digits in the current number.
    // digitCount(nums[i]) returns the number of digits in the current number.
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// radixSort(nums): Sorts the numbers in the list using the radix sort algorithm.
function radixSort(nums) {
  // Find the maximum number of digits in the largest number in the list.
  let maxDigitCount = mostDigits(nums);
  // Loop from k = 0 up to the largest number of digits.
  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 to 9).
    // digitBuckets is an array of 10 empty arrays.
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // Place each number in the corresponding bucket based on its kth digit.
    for (let i = 0; i < nums.length; i++) {
      // getDigit(nums[i], k) returns the kth digit of the current number.
      let digit = getDigit(nums[i], k);
      // Push the current number into the corresponding bucket based on its kth digit.
      digitBuckets[digit].push(nums[i]);
    }
    // Replace our existing array with values in our buckets, starting with 0 and going up to 9.
    // [].concat(...digitBuckets) flattens the array of arrays into a single array.
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// Test Cases:

radixSort([8, 6, 1, 12]); // [1,6,8,12]
radixSort([10, 100, 1, 1000, 10000000]); // [1,10,100,1000,10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); // [4,7,29,86,408,593,902,1556,3556,4386,8157,9637]

// Resources/References:
// https://www.doabledanny.com/radix-sort-in-javascript
