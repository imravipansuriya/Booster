/*=======================================
    JavaScript Getter and Setter
=========================================*/

/**

In JavaScript, there are two kinds of object properties:

1.Data properties
2.Accessor properties

 */

// Accessor Property

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value


const student = {
    firstName: "Punam",

    get getname(){
        return this.firstName;
    },

    set setname(newname){
        return this.firstName = newname;
    }
}

console.log(student.firstName)

student.setname = "Randim";

console.log(student.firstName)