/*==============================
        JavaScript Map
================================*/

/*
--------------------
Definition and Usage
--------------------

map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.

*/


const array = [10, 20, 30, 40, 50]


// const mapArray = array.map( (ele) => ele * 2 )

const mapArray = array.map( (ele) => {
    return ele * 5
} )

console.log(mapArray)


