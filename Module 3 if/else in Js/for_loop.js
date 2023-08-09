// Loops are the statements which we mainly use to control flow of a program and to do some repetitive tasks

// for loop basic structure:
// for(initialization;condition;increment){
    // body
// }

// e.g. 
// a="Hello Welcome to for loop"
// for(i=0;i<10;i++){
    // console.log(i)
// }

// Good basic program:
// We have an array and we want square of each element of that array.

array=[1,2,3,4,5,6,7,8,9,10]
squared_array=[]
for(i=0;i<10;i++){
    console.log(squared_array.push(array[i]**2))
}
console.log(squared_array)
