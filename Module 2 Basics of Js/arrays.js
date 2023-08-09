// Arrays provides us with ordered collection of data
var arr=[12,"Ferrari",true,12.75]
// console.log(arr)

// accessing  the Elements
// var a=arr[1]
// console.log(a)

// console.log(arr[4])

// Replacing elements of an array using index.
// arr[1]="BMW"
// var b=arr[1]
// console.log(b)

// Also we have a length property by which we can get length of array and it will return us with number of elements inside the array:
// console.log("The length of array is",arr.length)

// Array Methods
// Inbuilt Array Methods
var arr2=[1,3,4,5,6,]
console.log("This is normal array",arr2)
// 1.pop method
// This pop remove the last element from the Array.
arr2.pop()
console.log("This is array after pop method",arr2)

// 2.push method
//  This will add  one element at the end of the array.
arr2.push(99)
console.log("This is array after push method",arr2)

// 1.shift method
// This shift method, remove  the first element from the Array.
arr2.shift()
console.log("This is array after shift method",arr2)

// 1.unshift method
// This shift method, add an element at first index in the Array.
arr2.unshift(30)
console.log("This is array after unshift method",arr2)