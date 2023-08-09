// This is one the imp. loop in Js.
// In Js. , the for-in loops allows us to loop through the properties of an object.
// The statements of the code found  within the loop body will be executed once for each property of  any object.
// The difference b/w for_in and for_of is that in (for in loop), it will print index value if we print the iterator but in 
//(for_of method), it will print us with the values when we print iterator.
// var colors = {
//     'Primary':'Blue',
//     'Secondary':'Red',
//     'Tertiary':'Red'
// }

// for(var color in colors){
// console.log(color+" : "+colors[color])
// }

var color_array=["White","Orange","Yellow","Red","Pink"]

for(var color in color_array){
    console.log(color+"."+color_array[color])
}
console.log("\n")
for(var color of color_array){
    console.log(color)
}