// What is an expression?
// var a=2+3 this is an expression and this is generating an O/P thus, it is a function

// As in the below case the function doesn't have a name and a functn which does not have a name
// is called anonymous function.
// var add=
// function(a,b)
// {
//     console.log(a+b)
// }

// add(3,4)

// Also we can return values from function and then catch them in another variables and then can
// print those values as well
// e.g.
var add=function(a,b){
    return a+b
}
// result=add(3,40)
// console.log(result)

// Also we can pass the whole function to another variable e.g.:
var addition = add
console.log(addition(5,9))