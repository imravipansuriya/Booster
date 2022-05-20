/*=========================================
    JavaScript Methods and this Keyword
===========================================*/


// In JavaScript, objects can also contain functions. For example

// object containing method

const person = {
    name: "Maniya",
    greet: function(){
        console.log("Mical")
    }
}

// Accessing Object Methods

// You can access an object method using a dot notation. The syntax is:
// objectName.methodKey()

// To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example.
const student = {
    name : "Jhon",
    class: "10th",
    bio: function(){
        console.log("Hii my name is " + this.name + " and i am in " + this.class + " Class")
    }
}

console.log(student.name)

student.bio()

