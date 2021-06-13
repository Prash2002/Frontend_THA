//Write a JavaScript function to check whether an `input` is an array or no
function is_array(ele){
    return Array.isArray(ele);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Write a JavaScript function to clone an array

function array_Clone(ele){
    arr = [];
    console.log(ele);
    ele.forEach(item=>{arr.push(item);});
    return arr;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Write a JavaScript function to get the first element 
// of an array. Passing a parameter 'n' will return the 
// first 'n' elements of the array.

function first(arr, n=1){
    return arr.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
