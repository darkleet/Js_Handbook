// It  is a very very important concept of Js

// Here we will first create a normal variable and a normal function and then
// call them

// var a="I am a"

// function greet(){
//     console.log("Hi Here we will learn hoisting")
// }
// console.log(a,"This is when a is fetched")
// greet()

// HEre we can see is that both are printed perfectly .

// But now if we first call the variable and the function even before creating them then
// what happens is that the function will be fetched and will print whatever it has inside its body as function is fetched  to the
//  memory as a whole  but in case of variable it will be undefined in the memory step.

// console.log(a)
// greet()

// var a="I am a"

// function greet(){
//     console.log("Hi Here we will learn hoisting")
// }

// O/P:
// undefined
// Hi Here we will learn hoisting

// In the above program we will understand that whenever we write a program in Js, the
// execution context has two phases:
// 1.Memory phase(first this happens)
// =>In case of variable it is undefined in memory phase.
// =>In case of function it is taken as whole  body in memory phase.
// =>Thus function is taken as whole in the memory execution phase.


// This concept we talked about is known as hoisting.
// $IMP DEFINITION...$
// Hoisting is a concept in Js which allows to move our declarations above.

// 2.Code Execution (second this happens)

// Also if we remove a in the above code and then we run the code then it will generate
// an error as a has been initialized  as undefined So,it was returning undefined.


// one more thing to be seen 

console.log(add(3,4))

var add=function(a,b){
    console.log(a+b);
}

// In this above code,add is not a function because in the memory execution phase
// variable is assigned as undefined and we cannot call undefined thus,we cannot call
// function expression before declaring it.


// #IMPORTANT GOOD CODE TIP#
// WE SHOULD NOT LET OUR FUNCTIONS CALL CALL EVEN BEFORE DECLARING OR BEFORE DEFINING THEM
// THUS TO MAKE OUR CODE SAFE IN CASE OF FUNCTIONS.