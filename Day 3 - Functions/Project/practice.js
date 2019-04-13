// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.
// function calculateDogAge(age, humanAge) {
//   dogAge = age*7;
//   humanAge = age/7;
//   return("Your doggie is " + dogAge + " years old in dog years! and you are " + humanAge + " years old in dog years!");
// }


// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
// function celsiusToFahrenheit(n) {
//   let celsius = (n*9/5)+32;
//   return(n + "°C is " + celsius + "°F")
// }
// function fahrenheitToCelsius(m) {
//   let fahrenheit = (m-32)*(5/9);
//   return(m + "°F is " + fahrenheit + "°C")
// }


//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// Will the function work differently if else is removed?
//ANSWER: No, it works the same.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm("Did parents allow you?");
// }
// Is there any difference in the behavior of these two variants?
//ANSWER: The return is executed outside the if statement.

// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Do you have your parents permission to access this page?");
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
// function checkAge(age) {
//   return
// }

//Using Arrow Function implemented ternary operator:
// let checkAge = age => ( age > 18 ? true : false);

//Implemented OR:
// let checkAge = age => ( age > 18 || false);

//=======================================================
//=======================================================

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

// Basic pow function:
// function pow(x,n) {
//   return x **= n;       //Meaning:  x  = x ** n
// }

// Using prompt:
// function pow(x,n) {
//   let num = prompt("Enter a number...");
//   let power = prompt("Enter the power...");
//   do {
//     alert(num **= power);
//   }
//   while (n >= 1);
// } //DO WHILE SHOULD NOT BE USED. It is used when you want to run a code block once no matter what. The condition is checked after the code is run once. Only if the condition is true, the code is executed again.


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
// function checkVowels(str) {
//  let word = str.toString();
//  if (word.includes("a") {
//  || "e" || "i" || "o" || "u")) {
   
//  }
// }


// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

function checkPal(string) {
	if (string.split('').reverse().join('') === string) {
		return console.log('this is a palindrome');
    } else console.log('this is not a palindrome');

}

// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10

// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// Write a function that returns the largest element in a list.

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

// Write a program that takes a number under (25) and prints the multiplication table for the number.
function mulTable(n) {
	
}

