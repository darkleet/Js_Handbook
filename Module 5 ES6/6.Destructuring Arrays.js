// The Destructuring assignment is a Js expression that makes it possible to unpack values
// from arrays, or properties from objects,into distinct variables.

// e.g.
let arr=["Hi","my","name","is","JavaScript","I","am","Js"]

// Here we have linked all variables with particular words of the array.
let[a,b,c,d,e,f,g,h,i]=arr
// Also if we write more letters than the words in the array the empty element will show us
// undefined.

// e.g.
// console.log(a)
// console.log(h)
// console.log(i)

// Output
// Hi
// Js
// undefined

// Also we can put an empty object in array as well.
let aee=[1,2,3,,4,5,6]
let[z,x,w,v,t,n,m,q]=aee
console.log(t)
