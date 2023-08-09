// Before we were declaring and writing functions like below:
// let test1=function() {
//     console.log("1");
// }

// let test2=function(a) {
//     console.log(a+2);
// }

// let test3=function(a,b) {
//     console.log(a+b);
// }

// Now we will declare function in a new way:
let test1=
()=>{
    console.log("1");
}

let test2=
(a)=> {
    console.log(a+2);
} 

// Also we can write this above function like this:
let test32=
a=> {
    console.log(a+2);
} 


let test3=
(a,b)=> {
    console.log(a+b);
}

// For single line function no curly braces are needed.
// let test4=(a,b)=> console.log(a+b); 