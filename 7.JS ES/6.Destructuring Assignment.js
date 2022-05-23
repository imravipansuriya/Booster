/*==========================================
    JavaScript Destructuring Assignment
============================================*/

/*
    The destructuring assignment introduced in ES6 makes it easy to 
    assign array values and object properties to distinct variables.
*/


const person = {
    name: "Maika",
    age: 24,
    gender: "female"
}

// destructuring assignment

let {name, age, gender} = person


console.log(name, age, gender)


const arrayPerson = ["Malika", 24, "Female"]

let [x, y, z] = arrayPerson

console.log(x, y, z)