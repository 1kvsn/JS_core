/* const
Answer following Questions:
  1. Why no error is generated after the line 14?
  2. Why after the line 19 TypeError is generated?
Change one line of code so, that error will go away.
Don't change lines 12, 17.
*/


const arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//   Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]

// No Error is generated after line 14 because the when we use PUSH method, we're not making any changes to the variable binding, just the values are being changed.

// When we say arr = [1, 2, 3, 4]; we're trying to bind the existing CONST variable with new values which is NOT possible as CONST can't be reassigned.

//==================================================================================

// Problem 2
// What's the output and why?
const person = {
  name: "Charlie",
  age: 28
};

person = "New Value";

console.log(person);

// The above code is trying to change the value of the CONST variable which is not possible since CONST variables can't be reassigned.

// Problem 3
// What's the output and why?

const user = {
  name: "Jack",
  batch: 4
};

user.name = "Jones";

console.log(user.name);

// The above code reassigns the value of the Key: name which is obviously possible no matter how the containing object is declared.

// Problem 4
// What's the output and why?
{
  const ide = "Vs Code";
}
console.log(ide);

// The above code throws exception as the const has its own block and it can't be called outside that block. If we move the console.log inside the curly braces, then the log works fine.

// Problem 5
// What's the output and why?
for (const i = 0; i < 10; i++) {
  console.log(i);
}

//During the iteration, the for loop is not able to reassign the const variable as CONST variables can't be reassigned.

// Problem 6
// What's the output and why?
console.log(pizza);
var pizza = "pizza 🍕🍕";
// When the above code is executed, the console log creates its own execution context and looks for the variable named 'pizza' which it can't find as it is undefined at that moment.

