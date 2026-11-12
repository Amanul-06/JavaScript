// Datatypes are of 2 types mainly: Primitive, Non Primitive / Reference

// Primitive: 7: Number, String, Boolean, null, undefined, Symbol, BigInt
// Reference (NonPrimitive): Array, Object, Funciton

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.log(typeof (outsideTemp)) // object

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false

// BigInt
const bigNumber = 2n
console.log(typeof bigNumber); // bigint

// Array
const heroes = ["IronMan", "Hulk", "Thor"]
console.log(typeof heroes) // object
console.log(typeof heroes[0]) // string
console.log(typeof heroes[0][1]) // string

// Object
let myObj = {
    name: "Amanul",
    age: 20
}
console.log(myObj.name); // Amanul

// Function
const myFunc = function(){
    console.log("Hello World");
}
myFunc(); // Hello World


// https://262.ecma-international.org/5.1/#sec-11.4.3

