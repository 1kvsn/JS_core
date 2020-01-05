// Call method ( a.k.a function borrowing )

// We can borrow a function from one object and use it with the data of another object

// example

let name = {
	firstname: 'Sasikant',
	lastname: 'Nair',
	printFullName: function () {
		return console.log(this.firstname + " " + this.lastname);
	}
}

name.printFullName(); // Sasikant Nair

let name2 = {
	firstname: 'Jay',
	lastname: 'Sean',
	// we can copy the same method from above and use it here but this can be acheived in a much better way while adhering to the D-R-Y principle

	// printFullName: function () {
	// 	return console.log(this.firstname + " " + this.lastname);
	// }
}

// we'll borrow the method from first object

name.printFullName.call(name2) 

// here, we're accessing the first object and calling the method printFullName
// more importantly, we've used .call() method.
// The first parameter for .call() method will be "this" object for it.
// second parameter can be the general arguments to the function

// hence it logs 'Jay Sean'

// --------------------------------------------------------

// Another way including the general parameters to the function

let name = {
	firstname: 'Sasikant',
	lastname: 'Nair',
}

let printFullName = function (hometown, state) {
	return console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
}

let name2 = {
	firstname: 'Jay',
	lastname: 'Sean',
}

// here the printFullName() function is outside and we can use it for both the objects like :

printFullName.call(name, "Ahmedabad", "Gujarat"); // Sasikant Nair
printFullName.call(name2, "Pune", "Maharashtra"); // Jay Sean

// ------------------------------------------------------------

// Apply method ( same as call(). The only difference is the way we pass arguments )

// the arguments are passed as an array list

printFullName.call(name, ["Ahmedabad", "Gujarat"]); // Sasikant Nair
printFullName.call(name2, ["Pune", "Maharashtra"]); // Jay Sean

// ----------------------------------------------------------

// bind method

// the bind method binds the object to the copy of the function on which it is called. It DOESN NOT call the function.

// It is used to bind the function and the object together and keep a copy saved for later use

let printMyName = printFullName.bind(name2, "Pune", "Maharashtra")
console.log(printMyName); // the whole copied function shows up which can be invoked later

printMyName(); // Jay Sean from Pune, Maharashtra


// -----------------------------------------------------

// RECAP

// call => invokes function directly with the object we want along with the general parameters

// apply => same as above except the general function params are passed in the form of an array

// bind => DOES NOT invoke the function. Just binds the object with the function and saves a copy for later use

// =========================================================

