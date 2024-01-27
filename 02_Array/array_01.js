const arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr);
// arr.push("Hi")
// console.log(arr);
// arr.pop()
// console.log(arr);
/*
    shift and unshift are inefficient operations
    because they shift the whole array
*/
// arr.unshift("hello")
// console.log(arr);
// arr.shift()
// console.log(arr);

// console.log(arr.includes(4));
// console.log(arr.indexOf(3));

// const newArr = arr.join()//converts to string
// console.log(arr);
// console.log(newArr);

console.log("A" , arr);
// console.log(arr.slice(2,5))
const myn = arr.splice(2,5);
console.log(myn);
console.log("B", arr);