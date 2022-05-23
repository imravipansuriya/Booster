/*==============================
   JavaScript Spread Operator
================================*/

// Spread Operator

// The spread operator ... is used to expand or spread an iterable or an array. For example,

// Spread Operator with array

const arrayValue = ["My", "Name", "is", "Ravi"]

console.log(arrayValue)

console.log(...arrayValue)

const twoArray = [...arrayValue, "I", "am", "MEARN"]

console.log(...twoArray)

// Spread Operator with Object

const spradObj = {
    x: 1,
    y: 2,
    z: 3,
}

const spradObjtwo = {
    name: "jhone",
    age: 58,
}

const demo = {...spradObj, ...spradObjtwo}

console.log(demo)