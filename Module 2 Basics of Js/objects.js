// Every object in Js  describes different Entity with its properties.
// e.g. 
// var person= {
//     name:"Sendert Ruby",
//     age:40,
// };
// console.log(person);

// Accessing values from the object :
// 1.dot notation method
// console.log(person.age);

// 2.Bracket Notation
// console.log(person["name"]);

// Doing some more things with objects 
var shinchan = {
    name: "Shinchan",
    age: 5,
    friends: ["neni", "kazama", "boo", "masao", "ichan", "shiro", "nanako"],
    address: {
        country: "Japan",
        city: "Kasukabe",
        pin: "123456"
    }
}

// console.log(shinchan.friends[4])
console.log("The city in which shinchan is living is",shinchan.address.city)

// We can also change the values of key from outside:
// e.g. 
shinchan.address.pin=456245
console.log("Updated pin of shinchan is",shinchan.address.pin)

// also we can add new key-value pair i.e. property inside the object from the outside:
shinchan.sister={
    name: "Himawari",
    age:3,
    hobby:"playing with shiny things"
}
console.log("The sister of shinchan is added",shinchan)

// Also we have a delete object from where we can delete property from an object:
delete shinchan.age
console.log("The age of shinchan is deleted",shinchan)