/*=======================================
    JavaScript Constructor Function
=========================================*/

// In JavaScript, a constructor function is used to create objects


// using object literal
let person1 = {
    name: "Dino"
}



// using constructor function

function person(name, age, gender) {
    this.name = name,
    this.age = age,
    this.gender = gender,

    this.greet = function (){
        console.log("Hii My Name is " + this.name)
    }
}

const person2 = new person("Dolly", 23, "Female")



console.log(person2)