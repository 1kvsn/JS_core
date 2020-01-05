/* let*/

"use strict";

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i, "Inside");
}

console.log(i, "Outside");

// Expected Output
// 0 "Inside"
// 1 "Inside"
// 2 "Inside"
// 3 "Inside"
// 4 "Inside"
//10 "Outside"


//If we change the variable in the FOR loop to LET, then the LET will have its own block scope and the inside will show its own output and the VAR declared in GLOBAL space will show up as output in the OUTSIDE console.log.

// Problem 2
// Write the output and reason behind it
for (let i = 0; i < 10; i++) {
  // Doing nothing
}
console.log(i);

//In the above code, the FOR loop is iterating from 0 => 10, when it reaches the 10, it finds that the condition is no longer true and stops the iteration. So, the final value of the i was 10 when the console.log was checking for the value of i.

// Problem 3
// Write the output and reason behind it
for (let i = 0; i < 10; i++) {
  let username = "Superuser!";
}
console.log(username);

//The LET defined inside the FOR loop has its own block scope and it can't be accessed by anything outside the scope of FOR LOOP. This is the reason, when the outer console.log checks for the variable, it doesn't find any such variable declaration.

// Problem 4
// Write the output and reason behind it
let name = "Jack";
name = "Jones";
console.log(name);

//Here the value of variable NAME is reassigned to 'Jones'. So, the output is 'Jones'.

// Problem 5
// Write the output and reason behind it
let firstName = "Jack";
let firstName = "Jones";
console.log(firstName);

//Here, the second line is trying to declare a variable which was already declared earlier. Hence, the error appears indicating the same. We can reassign a LET variable with a new value within its scope but can't redeclare it with the same variable name.

// Problem 6
// Write the output and reason behind it

let marks = 76;
let pass = false;

if (marks > 70) {
  let pass = true;
}

console.log(`Passed: ${pass}`);

// Here the LET variable has its own block scope due to which its value can't be accessed outside the IF statement. The console.log gets the value from the GLOBAL scope.

// Problem 7
(function() {
  let pass = true;
})();
console.log(pass);

//The LET Variable creates its block within the IIFE function so its value can't be accessed outside of it.

// Problem 8
{
  let users = 45;
}
console.log(users);

//The LET Variable creates its block within the Object so its value can't be accessed outside of it.

// Problem 9
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";`

//creation phase, the value of pizza is undefined.`
