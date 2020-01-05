// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”.
// let value1 = prompt( "Enter Password" );
// let value2 = prompt( "Confirm Password" );
// if (value1 === value2) {
// 	console.log( "Password Validated" );
// } else console.log( "Password do not match" );



// Find the output of the following
// Logical AND operation (checks for Falsy values)
// true  && true;  // True
// true  && false; // False
// false && true;  // False
// false && false; // False

// Logical OR operation (Checks for Truthy values)
// true  || true;  // True
// true  || false; // True
// false || true;  // True
// false || false; // False

// "foo" && "bar"; // "bar"
// "bar" && "foo"; // "foo"
// "foo" && "";    // ""
// ""    && "foo"; // ""

// "foo" || "bar"; // "foo"
// "bar" || "foo"; // "bar"
// "foo" || "";    // "foo"
// ""    || "foo"; // "foo"



//====================================================
//====================================================


// let isGuestOneVeg = false;
// let isGuestTwoVeg = false;

// // If both are veg "Only offer up vegan dishes."
// if ( isGuestOneVeg === true && isGuestTwoVeg === true ) {
// 	console.log( "Only offer vegan dishes." );
// }
// // At least one veg  "Make sure to offer up some vegan options."
// // Else, "Offer up anything on the menu"

// if ( isGuestOneVeg === true || isGuestTwoVeg === true ) {
// 	console.log( "Make sure to offer some vegan options." );
// } else console.log( "Offer anything on the menu." );

//===========================================================
//===========================================================

// let temp = 4;

// 1. If temperature is less then 32 alert "It is freezing outside"
// if ( temp < 4 ) {
// 	alert( "It is freezing outside" );
// }

// 2. If the temperature is greater then 110 alert "It is hot outside"
// 3. else 'Go for it. It is pretty nice out'.
// if ( temp > 110 ) {
// 	alert( "It is hot outside" );
// } else alert( "Go for it. It is pretty nice out" );

//=============================================================
//=============================================================

// Output of this alert( alert(1) || 2 || alert(3) );
// Output is 1. in browser
// Output is 2 on console.

//=============================================================
//=============================================================


// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
// function num(a,b) {
// 	console.log( "Addition is:", a+b );
// 	console.log( "Substraction is:", a-b );
// 	console.log( "Multiplication is:", a*b );
// 	console.log( "Division is:", a/b );
// }

//===========================================================


// Function to display a number if user enters negative number

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// let sum = 0;
// for ( let num = 1; num < 1000; num++ ) {
// 	if ( num % 3 === 0 || num % 5 === 0 ) {
// 		sum += num;
// 	}
// }
// console.log( sum );

//==============================================================

// If user enters positive number, that number won't be displayed
// Funnction to check whether an integer entered by the user is odd or even
// function oddEven(num) {
// 	if ( num % 2 === 0 ) {
// 		console.log( "This # is even." );
// 	} else console.log( "This is odd. Go away!" );
// }

// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
// function relCheck(a, b) {
// 	if ( a > b ) {
// 		console.log( a, "is greater than", b );
// 	} else if ( a < b ) {
// 		console.log( b, "is greater than", a );
// 	} else console.log( a, "is equal to", b );
// }

// Funnction to Check Whether a Character is Vowel or Consonant
// function charCheck(i) {
// 	if ( i == "a" || i == "e" || i == "i" || i == "o" || i == "u" ) {
// 		console.log( "This is a vowel" );
// 	} else console.log( "This is a consonant" );
// }

// Funnction to Find the Largest Number Among Three Numbers
// function largestNum(a, b, c) {
//  if ( a > b && a > c ) {
// 	 console.log( a, "is largest" );
//  } else if ( b > a && b > c ) {
// 	 console.log( b, "is largest");
//  } else if ( c > a && c > b ) {
// 	 console.log( c, "is largest" );
//  } else if ( a === b && b === c && a === c ) {
// 	 console.log( "All numbers are equal" );
//  }
// }

//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to 1.
// - TWO, if num is equal to 2.
// - THREE, if num is equal to 3.
// - FOUR, if num is equal to 4.
// - FIVE, if num is equal to 5.
// - SIX, if num is equal to 6.
// - SEVEN, if num is equal to 7.
// - EIGHT, if num is equal to 8.
// - NINE, if num is equal to 9.
// - PLEASE TRY AGAIN, if  is none of the above.

// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30

// Function to generate Multiplication Table of a given number (use alert for number input)

// Function to calculate the Factorial of a Number

// Output: var x = 10 + "1"; console.log(x); typeof x;

//  Solve: 225 % 6 = ?

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// if else

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

//Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// Loops
// For loop
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
