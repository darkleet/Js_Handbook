const calculator=require("./calc")

// And here we have to write the  key which we have written in calc.js file:
// calculator.add(2,3)
// calculator.sub(3,3)
// calculator.mul(4,3)
// calculator.division(6,3)

// And here we will get O/P:
// [Running] node "c:\Users\dsart\Desktop\Scaler Js 19 July\Module 5 ES6\main.js"
// 5
// 0
// 12
// 2

console.log(typeof (new (class { class () {} })))