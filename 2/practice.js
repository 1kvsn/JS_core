// Log message in console saying "I'm Learning Javascript"
// let message = "I'm learning JavaScript";
// console.log(message);

// var name = "Mark";  "Mark" is a string.  What is name?
// name is a variable.

// Declare two variables: admin and name.
// let admin;
// let name;

// Assign the value "John" to name.
// let name = "John";

// Copy the value from name to admin.
// let name = "John";
// let admin = name;

// Show the value of admin using alert (must output “John”).
// alert(name);

// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm
// Done

// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"
// Done earlier

// Modify the previous program such that only the users Alice and Bob are greeted with their names.
// var tag = document.querySelector("button");
// tag.onClick = function handleClick() {
// 	var name = prompt("What's your name?");
// 	tag.textContent = "Hello! " + name;
// }


// Find the error if any (var product cost = 3.45;)
// var product cost = 3.45;
// Incorrect method to declare a variable. Alternate method could be product_cost

// Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"
// let user = prompt("What's your name?");
// let name = "Hello Sam, How are you doing";
// if (user == "Sam") console.log(alert(name));

// Right or Wrong
//   "Hello World" Right
//   'Hello World" Wrong
//   "Hello World' Wrong
//   'Hello World' Right

// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.
// var str = prompt("Enter Anything...");
// var n = str.length;
// alert("The length of your typed text is " + n);

// Age of the owner
// Calculate the age of the dog if owner's age is 7 times of dog
// var age = 26;
// var dog = age/7;
// alert(dog);


// Use console.log() function to log the age of the dog
// var age = 26;
// var dog = age/7;
// console.log(dog);

// Marks and max marks of the student
// var studentScore = 41;
// var maxScore = 100;
// // Calculate the percentage of marks the student got
// var cent = studentScore/maxScore * 100;
// // alert(cent + " %");

// // log the percentage in console using console.log()
// console.log(cent + " %");


// var city = "Dharamshala";
// var country = "India";
// var full = city + ", " + country;
// // Make a function which can alert the message "Dharamshala, India"
// function fullName() {
// 	alert(full);
// }
// fullName();

// Make a simple calculator with these functions. Using prompt, type conversion, if else statement.
// 1. Add
// var num1_str = prompt("Enter a number..");
// var num1 = Number(num1_str);
// var num2_str = prompt("Enter the second number");
// var num2 = Number(num2_str);
// var sum = num1 + num2
// alert(sum);

// 2. Sub
// var sub = num1 - num2
// alert(sub);

// 3. Mul
// var mul = num1 * num2
// alert(mul);

// 4. Div
// var div = num1/num2
// alert(div);


const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;


// Write a program to calculate the total price of your phone purchase.
// var totalPrice = (PHONE_PRICE * TAX_RATE) + PHONE_PRICE
// console.log(totalPrice);
// Ans: 107.9892

// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
for (var = i; i < bank_balance; ) {
	

}




// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.



//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.


//Finally, check the amount against your bank account balance to see if you can afford it or not.


// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.


// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.



// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.