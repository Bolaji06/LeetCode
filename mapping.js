

function map (arr, fn){
    let transformedArr = [];
    for(let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
}
function fn (num, i) {
   return num * num + i  
}
const result = map([1, 2, 3], fn);
console.log(result);