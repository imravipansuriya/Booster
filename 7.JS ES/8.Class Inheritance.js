/*==========================================
        JavaScript Class Inheritance
============================================*/

// Class Inheritance

// Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.

// Using class inheritance, a class can inherit all the methods and properties of another class.

// Inheritance is a useful feature that allows code reusability.



class animal{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    speak(){
        console.log(this.name + ' Make a noise.')
    }

    run(){

        console.log(this.name + ' Run with ' + this.speed + ' .')
    }

    stop(){
        console.log(this.name + ' stand still.')
    }
}

const animal1 = new animal("Dog", "1Km")

console.log(animal1.speak())
console.log(animal1.run())
console.log(animal1.stop())


class dog extends animal{
    constructor(name, speed){
        super(name, speed);
    }
    speak(){
        console.log(this.name + " Barks.")
    }

    run(){
        console.log(this.name + ' run with ' + this.speed + ' speed.')
    }
}

const dog1 = new dog("Moti", "5kmh")

dog1.speak()

dog1.run()
