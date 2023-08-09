// For object destructuring it is must to use the same key names as they were used in the 
// object declaration.
// e.g.
let myObj={
    name: "Adam",
    age:24,
    gender:"M",
    address:
    {
        country:"India",
        city:"Ludhiana",
        state:"Punjab"
    }
}

// let{name,age,gender}    = myObj
// Also if we want to give those keys another names so we can give them while destructuring.
// And one last thing is destructuring of nested object and which is done here..
let{name:n,age:a,gender:g,address:{city:c}}    = myObj
console.log(n)
console.log(a)
console.log(g)
console.log(c)



