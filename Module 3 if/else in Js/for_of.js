// A for of statement creates a loop iterating over iterable objects.
// Including built-in string,Array,Array-like objects like node-list and also map and set.
// The difference b/w for_in and for_of is that in (for in loop) it shows keys if we print the iterator but in for_of method it will print us
// with the values.

var scores=[60,70,80,95]

for(score of scores){
    console.log(score)
}
// Now for accessing index of the array,we can access by using entries method.
// e.g.

// var scores=[60,70,80,95]
// for(var [index,score] of (scores.entries()))
// {
//     console.log(index+"."+score)
// }


//Using loop in Strings:
var input="We will do something great in our life!!!!"


for(var a of input){
    console.log(a)
}
