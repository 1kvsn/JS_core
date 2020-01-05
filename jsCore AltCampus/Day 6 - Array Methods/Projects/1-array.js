// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods

// Find largest number in numbers

// let biggest = numbers.reduce((acc, val) => {
//   if (val > acc) {
//     acc = val;
//   }
//   return acc;
// });
// console.log(biggest);

// // In Ternary Format:
// let biggest = numbers.reduce((acc, val) => val > acc ? val : acc);
// console.log(biggest);

//==================================================================
// Find longest string in strings

// Filter and Map = new Array
// fill and sort = acts on existing Array
// strings.sort((a,b) => a.length - b.length); //this sorts in smallest to largest
// let last = strings[strings.length-1];
// console.log(strings);
// console.log(last);

//==================================================================

// Find all the even numbers.
// let evenNum = numbers.filter(val => {
//   return val%2 === 0;
// });
// console.log(evenNum);

//==================================================================

// Find all the odd numbers
// let oddNum = numbers.filter(val => {
//   return val%2!== 0;
// });
// console.log(oddNum);

//===================================================================

// Find all the words that contain 'is' use string method 'includes'

// function includesIs(str) {
//   if ( strings.join(" ").includes("is") ) {
//     console.log()
//   }
// }

function includesIs(str) {
  for ( let value of strings ) {
    if ( value.includes("is") ) {
      console.log(value);
    }
  }
}

// In Ternary format:
// ???????

//=====================================================================

// Find all the words that contain 'is' use string method 'indexOf'

var strings = ['this','is','a','collection','of','words'];




// Check if all the var strings = ['this','is','a','collection','of','words'];numbers in numbers array are divisible by three use array method (every)




//  Sort Array from smallest to largest


// Remove the last word in strings


// Add a new word in the array


// Remove the first word in the array


// Place a new word at the start of the array use (upshift)



// Make a subset of numbers array [18,9,7,11]


// Make a subset of strings array ['a','collection']


// Replace 12 & 18 with 1221 and 1881


// Replace words with string in strings array



// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname


// Sort the array created above alphabetically

