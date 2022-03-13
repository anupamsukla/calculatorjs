
const add = require("./add")
const subtract = require("./subtract")
const multiply = require("./multiply")
const divide = require("./divide")

let a = 5
let b = 25
console.log(`The sum of ${a} and ${b} is : ${add(a, b)}`)
console.log(`The sum of ${a} and ${b} is : ${subtract(a, b)}`)
console.log(`The sum of ${a} and ${b} is : ${multiply(a, b)}`)
console.log(`The sum of ${a} and ${b} is : ${divide(a, b)}`)
