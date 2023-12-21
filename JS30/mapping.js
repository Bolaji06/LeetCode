
// Given an integer array arr and a mapping function fn,
// return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

function map(arr, fn){
    // Create a new array
    let transformedArr = [];
    // Step through the array for each element in transformedArr create item with 'fn' function
    for (let i = 0; i < arr.length; i++){
        transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
}

function doubleWithIndex(arr, i){
    return arr * arr + i
}
const result = map([1, 2, 3], doubleWithIndex);
console.log(result);