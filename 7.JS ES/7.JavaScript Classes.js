/*==========================================
            JavaScript Classes
============================================*/
 

// JavaScript Classes are templates for JavaScript Objects.

// class
class person{
    constructor(name){
        this.name = name;
    }

     getName(){
        return this.name
    }

     setName(value){
        return this.name = value
    }
}

// const person1 = new person('Manish')
// const person2 = new person("Mahir")
// console.log(person1)

const person1 =  new person("Mohan")
const person2 =  new person("Baniya")

person1.setName("Mical")

console.log(person1)
console.log(person2)

// Constructor
// In JavaScript, a constructor function is used to create objects.
function mane(name){
    this.name = name;
}

const mane1 = new mane("Row")

console.log(mane1.name)