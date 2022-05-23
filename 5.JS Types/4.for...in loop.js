/*=======================================
        JavaScript for...in loop
=========================================*/

// The syntax og the for....in loop is


// for(key in Object){
//     // body of for.....in
// }

const student = {
    name: "Mona",
    class: 7,
    age: 12,
}


for(let key in student){
    console.log(key + " ==> " + student[key]) 
}