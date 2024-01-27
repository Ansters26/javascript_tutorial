//combining two arrays

const arr = ["abc","xyz","pqr"]
const arr2 = ["hello","world"]
// arr.push(arr2);
// console.log("After pushing array 2 ",arr);
//but we need to concatenate them so we are 

const combArr = arr.concat(arr2)
console.log(combArr)

const anotherArray = [1 , 2 , 3 , 4 ,[5 , 6 , 7],8 , [6 , 7 ,[4 , 5]]]
const realArray = anotherArray.flat(Infinity)//so in flat function we have to give depth within paranthesis
console.log(realArray)


//to check array

console.log(Array.isArray("Hello"));

// to convert to array

console.log(Array.from("Hello"));

//if using variables us Array.of()
let mark_1 =20
let mark_2 = 34
let mark_3 = 43

console.log(Array.of(mark_1,mark_2,mark_3));