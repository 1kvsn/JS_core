// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

// Define a function name calculateAge which returns the age of the person

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

// call the calculateAge function on each object

function Person(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;

	this.calculateAge = function () {
		const years = new Date().getFullYear() - this.yearOfBirth;
		return `${this.name} is ${years} years old`;
	}
}

const teacher1 = new Person('John', '1990', 'teacher');
const teacher2 = new Person('Arthur', '1994', 'teacher');
const teacher3 = new Person('Willy', '1999', 'teacher');


console.log(teacher1);
console.log(teacher1.calculateAge());
// console.log(teacher2);
console.log(teacher2.calculateAge());
// console.log(teacher3);
console.log(teacher3.calculateAge());

========================================================================

//Testing

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	};
}

//Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book1);

// Book {title: "Book One", author: "John Doe", year: "2013", getSummary: ƒ}

//In the above output, it is visible that the function is appearing as a value. We'll see a better way to store the function.

//Prototypes

//getSummary

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}
// this.getSummary = function() {
// 	return `${this.title} was written by ${this.author} in ${this.year}`;
// };
//check curly braces as the above code comes within the above function. Promotype do not.

//We'll replace the above code with:

Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book2.getSummary());

//If you check console.log(book2), you'll notice that the Object doesn't have the function getSummary around the other values and keys. It went inside the __proto__ 

//We would want the title, author and year of every book but we would not want the Summary of every book, that is the reason, we needed to find another way to store the function which outputs summary. Dunder Proto is a good place to store such functions.

//getAge Adding get getter to above function.

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

//getAge
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
}

//Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book2.getAge());

//Revise or Change Year

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

//getAge
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
}

Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
}

//Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book2); //outputs the book before revision
book2.revise('2018'); //revises the year
console.log(book2); //after revision


//Inheritance

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

//Lets create a Magazine Object and have it inherit the properties of the Book.

//Magazine constructor

function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);

	this.month = month;
	//As we got a month here, we've specified it separately above.

}

//Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);

// Outputs:
// 	Magazine {title: "Mag One", author: "John Doe", year: "2018", month: "Jan"}
// author: "John Doe"
// month: "Jan"
// title: "Mag One"
// year: "2018"
//__promo__: Object

//Now, we want to call getSummary.

console.log(mag1.getSummary());

//Output: Type Error. mag1.getSummary is not a function

//As we want the Magazine to inherit the prototype methods of the Book, we need to add the line below:

//Inherit Prototype

Magazine.prototype = Object.create(Book.prototype);

//If you run the code now, it won't work. BECAUSE, the instantiation is done before this code. This line needs to be moved above the instantiation. The final code becomes:
===============================================================

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

	Book.prototype.getSummary = function() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	};

	//Magazine constructor

	function Magazine(title, author, year, month) {
		Book.call(this, title, author, year);

		this.month = month;
//As we got a month here, we've specified it separately above.
	}

	//Inherit Prototype

Magazine.prototype = Object.create(Book.prototype);

	//Instantiate Magazine Object
	const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

	//Now, we want to call getSummary.

console.log(mag1.getSummary());

console.log(mag1); //The dunder proto uses Book Constructor. If we want it to use the magazine constructor, see below:

//Use Magazine Constructor

Magazine.prototype.constructor = Magazine;

console.log(mag1);

==============================================================

//Classes

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	
	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge() {
			const years = new Date().getFullYear() - this.year;
			return `${this.title} is ${years} years old`;
		}
		
	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}
}

//Instantiate the Object

const book1 = new Book('Book One', 'John Doe', '2015');

console.log(book1);

book1.revise('2019');

console.log(book1);


==============================================================================





