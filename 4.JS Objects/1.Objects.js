/*=========================================
    JavaScript Methods and this Keyword
===========================================*/

// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// object
const object_name = {
    key1: value1,
    key2: value2
 }

//  JavaScript Nested Objects

const student = {
    name: "Jhone",
    class: "10th",
    address: {
        city: "Surat",
        State: "Gujarat"
    }
}

// JavaScript Object Methods

const person = {
    name: "Mical",
    Surname: "Mandela",
    age: 28,
    bio: function(){
        console.log("Hii my Name is " + this.name)
    }
}

person.bio()