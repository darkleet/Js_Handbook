// 1.Re-declaration of a variable which is not valid in languages like Java or C++ and this should not be allowed
//  as this can create much security conflict in our code base.
// var a=42

var a=32

// console.log(a)
// O/P : 32

// 2.Scopeing Issue
// if(a===32){
//     var b=40
//     console.log(b)
// }

// O/P : 40 ok

// Now if we write 
// if(a===32){
//     var b=40
//     console.log(b,"Inside Block")
// }

// console.log(b,"Outside Block")

// O/P:
// 40 Inside Block
// 40 Outside Block

// This is one another security issue which is created as var b can 
// also be accessed/printed outside the if block which is not good.

// This states that the variables  declared with var keyword are function scoped and not
// and not block scoped.

// e.g. 
function test(){
    var c=100
    console.log(c,"INside function")
}
test()
console.log(c,"Outside function")

// O/P:
// 100 INside function
// c:\Users\dsart\Desktop\Scaler Js 19 July\Module 5 ES6\2.Problems with var.js:42
// console.log(c,"Outside function")
//             ^

// ReferenceError: c is not defined
// Thus the above output states us that how a variable is function scoped
// and how it cannot be accessed outside the function.

// But we need only block scoped variables for better security purposes.