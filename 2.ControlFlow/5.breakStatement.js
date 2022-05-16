/*================================
    JavaScript break Statement
==================================*/

// The break statement is used to terminate the loop immediately when it is encountered.

// break [label];

// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}