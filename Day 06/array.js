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
    if(n<=0){

        return [];
    }
    return arr.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


//Write a simple JavaScript program to join all elements of the 
// following array into a string.

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join(" "));
console.log(myColor.join("+"));

//Write a JavaScript program to find the most frequent 
// item of an array

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1.sort();
let temp= 0;
let x=0;
let ans = arr1[0];
for(let i=1; i<arr1.length; i+=x){
    x = arr1.lastIndexOf(arr1[i]) + 1 - i;
    if(x>temp){
        temp= x;
        ans = arr1[i];
    }
}
console.log(`${ans} (${temp} times)`);



