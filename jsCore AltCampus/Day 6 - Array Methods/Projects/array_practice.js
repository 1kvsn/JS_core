var joy = ["chrismas wreaths", "sugar canes", "snow angels", "elves"]

joy.forEach((element, index, array) => {
	console.log(`${index + 1}: ${element}`)
	});

// Output is:
// 1: chrismas wreaths
// 2: sugar canes
// 3: snow angels
// 4: elves

// ======================================================

// Making custom forEach function:

// iterate thru array
// for each value in array, execute a callback function

function forEach(array, callback) {
	for( var i = 0; i < array.length; i++ ) {
		callback(array[i]);
	}
}

var arr1 = ['cat', 'dog', 'fish'];

function callback(str) {
	console.log(str)
 }
 
// ======================================================

// Custom Array.Map method (not working yet!!)

// Map reduce sort filter foreach, slice, join, find:

// let myMap = function (array, callback) {
// 	let newArrayValues = [];
// 	for( let value of array ) {
// 		newValue = callback(value);
// 		newArrayValues.push(newValue);
// 	} return newArrayValues;
// }

// var fun = [1, 2, 3, 4, 5];

// function callback() {
// 	if ( i =0, i >= fun.length - 1, i++ ) {
// 		plus5[i] = fun[i] + 5;
// 	}
// }

// myMap(fun, callback);

// let myMap = function (array, callback) {
// 	let array = [];
// 	for( i = 0; i < array.length; i++ ) {
// 		array.push( callback( array[i] ) );
// 	}
// }
// var fun = [1, 2, 3, 4, 5];


// function callback() {
// 	for ( i = 0; i >= fun.length - 1; i++ ) {
// 		plus5[i] = fun[i] + 5;
// 	}
// }


