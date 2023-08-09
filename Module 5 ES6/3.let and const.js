// let vs var
// 1.Re declaration problem
// var a=20

// var a=45
// console.log(a);
// O/P 45

//Solution to re declaration problem
// let b=30
// let b=466

// console.log(a)

// console.log(b)
// Error is generated as soon as we type code in editor

// Scoping Problem 
// if(true){
//     var c=40
//     console.log(c)
// }

// console.log(c)

// O/P :40 40

// Scoping Problem SOlution

// if(true){
//     let c=40
//     console.log(c)
// }

// console.log(c)
//O/P : Error is generated in output as c cannot be accessed out of if block.

// Variables declared with let keyword are block scoped.


//We can reassign the let  variable.
//  i.e. 
let b=46
b=43

console.log(b)
// And this  should be allowed in every language or then how will we start for loop.




// const keyword
// =>Behaves just like let keyword 
// =>Cannot be re declared.
// Doesn't allow re allowance. i.e. as the name suggest the value remains constant throughout the
// program.
// =>Is block scoped