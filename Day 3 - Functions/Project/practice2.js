// Practice different way of writing function
//  i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// function // Optional
// functionName // Optional
// (arguments) // Optional
// return // Optional

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);
let convertToString = n => {
  return String(n);
};

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Declaration
function addtoNumber(n) {
  return(n + 1);
}
//Function Expression
let addtoNumber = function(n) {
  return(n + 1);
}
//Arrow Function
let addtoNumber = n => n + 1;
let addtoNumber = n => {
  return(n + 1);
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//Function Declaration
function subfromNumber(n) {
  return(n - 1);
}
//Function Expression
let subfromNumber = function(n) {
  return(n - 1);
}
//Arrow Function
let subfromNumber = n => n - 1;
let subfromNumber = n => {
  return(n - 1);
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Declaration
function addNumbers(a,b) {
  return(a + b);
}

//Function Expression
let addNumbers = function(a, b) {
  return(a + b);
}

//Arrow Function
let addNumbers = (a,b) => a + b;
let addNumbers = (a,b) => {
  return(a + b);
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//Function Declaration
function subNumbers(a,b) {
  return(a - b);
}
//Function Expression
let subNumbers = function(a,b) {
  return(a - b);
}
//Arrow Function
let subNumbers = (a,b) => a - b;
let subNumbers = (a,b) => {
  return(a - b);
}


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//Function Declaration
function mulNumbers(a,b) {
  return(a*b);
}
//Function Expression
let mulNumbers = function(a,b) {
  return(a*b);
}
//Arrow Function
let mulNumbers = (a,b) => a * b;
let mulNumbers = (a,b) => {
  return(a*b);
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//Function Declaration
function divNumbers(a,b) {
  return(a/b);
}
// Function Expression
let divNumbers = function(a,b) {
  return(a/b);
}
//Arrow Function
let divNumbers = (a,b) => a/b;
let divNumbers = (a,b) => {
  return(a/b);
}
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//Function Declaration
function mulbySelf(n) {
  return(n*n);
}
//Function Expression
let mulbySelf = function(n) {
  return(n*n);
}
//Arrow Function
let mulbySelf = n => n*n;
let mulbySelf = n => {
  return(n*n);
}
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//Function Declaration
function add(x,y) {
  return(x+y);
}
function sub(x,y) {
  return(x-y);
}
function mul(x,y) {
  return(x*y);
}
function div(x,y) {
  return(x/y);
}
//Function Expression
let add = function(x,y) {
  return(x+y);
}
let sub = function(x,y) {
  return(x-y);
}
let mul = function(x,y) {
  return(x*y);
}
let div = function(x,y) {
  return(x/y);
}
//Arrow Function
let add = (x,y) => x+y;
let add = (x,y) => {
  return(x+y);
}
let sub = (x,y) => x-y;
let sub = (x,y) => {
  return(x-y);
}
let mul = (x,y) => x*y;
let mul = (x,y) => {
  return(x*y);
}
let div = (x,y) => x/y;
let div = (x,y) => {
  return(x/y);
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
//Function Declaration
function trueFalse(a,b) {
  if (a > b) {
    return true;
  } else return false;
}
trueFalse();
//Function Expression
let trueFalse = function(a,b) {
  if (a > b) {
    return true;
  } else return false;
}
//Arrow Function
let trueFalse = (a,b) => {
  if (a > b) {
    return true;
  } else return false;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Function Declaration
function trueFalse(a,b) {
  if (a < b) {
    return true;
  } else return false;
}
//Function Expression
let trueFalse = function(a,b) {
  if (a < b) {
    return true;
  } else return false;
}
//Arrow Function
let trueFalse = (a,b) => {
  if (a < b) {
    return true;
  } else return false;
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//Function Declaration
 function checkEqual(a,b) {
   if (a === b) {
     return true;
   } else return false;
 }
 //Function Expression
 let checkEqual = function(a,b) {
   if (a === b) {
     return true;
   } else return false;
 }
//Arrow Function
let checkEqual = (a,b) => {
  if (a === b) {
    return true;
  } else return false;
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
//Function Declaration
function checkSmallestNum(x,y) {
  if ( x < y) {
    return x;
  } else return y;
}
//Function Expression
let checkSmallestNum = function(x,y) {
  if (x < y) {
    return x;
  } else return y;
}
//Arrow Function
let checkSmallestNum = (x,y) => {
  if (x < y) {
    return x;
  } else return y;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//Function Declaration
function largestNum(x,y) {
  if ( x > y) {
    return true;
  } else return false;
}
// Function Expression
let largestNum = function(x,y) {
  if (x > y) {
    return true;
  } else return false;
}
//Arrow Function
let largestNum = (x,y) => {
  if (x > y) {
    return true;
  } else return false;
}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function Declaration
function checkEven(n) {
  if (n % 2 === 0) {
    return true;
  } else return false;
}
//Function Expression
let checkEven = function(n) {
  if (n % 2 === 0) {
    return true;
  } else return false;
}
//Arrow Function
let checkEven = n => {
  if (n % 2 === 0) {
    return true;
  } else return false;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Function Declaration
function checkOdd(n) {
  if (n % 2 !== 0) {
    return true;
  } else return false;
}
//Function Expression
let checkOdd = function(n) {
  if ( n % 2 !== 0) {
    return true;
  } else return false;
}
//Arrow Function
let checkOdd = n => {
  if (n % 2 !== 0) {
    return true;
  } else return false;
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function Declaration
function checkGrade(score) {
  if ( score >= 90 && score <= 100 ) {
    return("A");
  } else if (score >= 80 && score <= 89) {
    return("B");
  } else if (score >= 70 && score <= 79) {
    return("C");
  } else if (score >= 60 && score <= 69) {
    return("D");
  } else if (score <=59 ) {
    return("F");
  }
}


//Function Expression
let checkGrade = function(score) {
  if ( score >= 90 && score <= 100 ) {
    return("A");
  } else if (score >= 80 && score <= 89) {
    return("B");
  } else if (score >= 70 && score <= 79) {
    return("C");
  } else if (score >= 60 && score <= 69) {
    return("D");
  } else if (score <=59 ) {
    return("F");
  }
}
//Arrow Function
let checkGrade = score => {
  if ( score >= 90 && score <= 100 ) {
    return("A");
  } else if (score >= 80 && score <= 89) {
    return("B");
  } else if (score >= 70 && score <= 79) {
    return("C");
  } else if (score >= 60 && score <= 69) {
    return("D");
  } else if (score <=59 ) {
    return("F");
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
//Function Declaration
function restaurant(reviews) {

}
//Function Expression
//Arrow Function

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
//Function Declaration
function wordJoin(word1, word2) {
  return( word1 + " " + word2);
}
//Function Expression
let wordJoin = function(word1, word2) {
  return( word1 + " " + word2);
}
//Arrow Function
let wordJoin = (word1, word2) => ( word1 + " " + word2);

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
//Function Declaration
//Function Expression
//Arrow Function
