/*
    Rotate array in javascript
    problem: Given a array and steps(k) value. Rotate the array of n elements to the right by k steps.
*/

function rotateArray(arr, steps) {
  if (arr.length < steps) return arr;
  let newArray = [];
  for (let i = arr.length - 1; i >= arr.length - steps; i--) {
    newArray.unshift(arr[i]);
  }
  for (let i = 0; i < arr.length - steps; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

result = rotateArray([1, 2, 3, 4, 5], 2);
console.log(result);
