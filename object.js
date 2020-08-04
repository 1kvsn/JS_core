// How to copy/clone an object

// ref: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/

// Shallow Copy means only first-level is copied

1. // Spread operator
2. // Object.assign()
3. // Object.fromEntries(Object.entries(obj))
4. // generic for-loop over the obj will also does shallow copy

// ------------------------------------------------

// Deep Copy
const cloneObj = JSON.parse(JSON.stringify(obj));
// In JSON.stringify/parse, the order of properties in the cloned object may be different.
// JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties.

// Lodash deepClone work with all types, function and Symbol are copied by reference.

// ------------------------------------------------

// Existence
// A property access like myObject.a may result in an undefined value if either the explicit undefined is stored there or the a property doesn't exist at all. So, if the value is the same in both cases, how else do we distinguish them?

var myObject = {
	a: 2
};

("a" in myObject);				// true
("b" in myObject);				// false

myObject.hasOwnProperty( "a" );	// true
myObject.hasOwnProperty( "b" );	// false

// The in operator will check to see if the property is in the object, or if it exists at any higher level of the [[Prototype]] chain object traversal. By contrast, hasOwnProperty(..) checks to see if only myObject has the property or not, and will not consult the [[Prototype]] chain.

// hasOwnProperty(..) is accessible for all normal objects via delegation to Object.prototype. But it's possible to create an object that does not link to Object.prototype (via Object.create(null) ). In this case, a method call like myObject.hasOwnProperty(..) would fail.

// Note: The in operator has the appearance that it will check for the existence of a value inside a container, but it actually checks for the existence of a property name. This difference is important to note with respect to arrays, as the temptation to try a check like 4 in [2, 4, 6] is strong, but this will not behave as expected.

// ------------------------------------------------

// Enumeration (means => "will be included if the object's properties are iterated through".)
var myObject = { };

Object.defineProperty(
	myObject,
	"a",
	// make `a` enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	// make `b` NON-enumerable
	{ enumerable: false, value: 3 }
);

myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty( "b" ); // true

// .......

for (var k in myObject) {
	console.log( k, myObject[k] );
}
// "a" 2

// You'll notice that myObject.b in fact exists and has an accessible value, but it doesn't show up in a for..in loop (though, surprisingly, it is revealed by the in operator existence check). That's because "enumerable" basically means "will be included if the object's properties are iterated through".

// Note: for..in loops applied to arrays can give somewhat unexpected results, in that the enumeration of an array will include not only all the numeric indices, but also any enumerable properties. It's a good idea to use for..in loops only on objects, and traditional for loops with numeric index iteration for the values stored in arrays.

// Another way that enumerable and non-enumerable properties can be distinguished:

var myObject = { };

Object.defineProperty(
	myObject,
	"a",
	// make `a` enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	// make `b` non-enumerable
	{ enumerable: false, value: 3 }
);

myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false

Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]
// propertyIsEnumerable(..) tests whether the given property name exists directly on the object and is also enumerable:true.

// Object.keys(..) returns an array of all enumerable properties, whereas Object.getOwnPropertyNames(..) returns an array of all properties, enumerable or not.

// Whereas in vs. hasOwnProperty(..) differ in whether they consult the [[Prototype]] chain or not, Object.keys(..) and Object.getOwnPropertyNames(..) both inspect only the direct object specified.

// There's (currently) no built-in way to get a list of all properties which is equivalent to what the in operator test would consult (traversing all properties on the entire [[Prototype]] chain). You could approximate such a utility by recursively traversing the [[Prototype]] chain of an object, and for each level, capturing the list from Object.keys(..) -- only enumerable properties.

// ------------------------------------------------

// Iteration

// Note:  The order of iteration over an object's properties is not guaranteed and may vary between different JS engines. Do not rely on any observed ordering for anything that requires consistency among environments, as any observed agreement is unreliable.

// If you iterate on an object with a for..in loop, you're also only getting at the values indirectly, because it's actually iterating only over the enumerable properties of the object, leaving you to access the properties manually to get the values.

// But what if you want to iterate over the values directly instead of the array indices (or object properties)? Helpfully, ES6 adds a for..of loop syntax for iterating over arrays (and objects, if the object defines its own custom iterator):

var myArray = [ 1, 2, 3 ];

for (var v of myArray) {
	console.log( v );
}
// 1
// 2
// 3

// The for..of loop asks for an iterator object (from a default internal function known as @@iterator in spec-speak) of the thing to be iterated, and the loop then iterates over the successive return values from calling that iterator object's next() method, once for each loop iteration.

// Arrays have a built-in @@iterator, so for..of works easily on them, as shown. But let's manually iterate the array, using the built-in @@iterator, to see how it works:

var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();

it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }

// Note: We get at the @@iterator internal property of an object using an ES6 Symbol: Symbol.iterator. We briefly mentioned Symbol semantics earlier in the chapter (see "Computed Property Names"), so the same reasoning applies here. You'll always want to reference such special properties by Symbol name reference instead of by the special value it may hold. Also, despite the name's implications, @@iterator is not the iterator object itself, but a function that returns the iterator object -- a subtle but important detail!

// As the above snippet reveals, the return value from an iterator's next() call is an object of the form { value: .. , done: .. }, where value is the current iteration value, and done is a boolean that indicates if there's more to iterate.

// Notice the value 3 was returned with a done:false, which seems strange at first glance. You have to call the next() a fourth time (which the for..of loop in the previous snippet automatically does) to get done:true and know you're truly done iterating. The reason for this quirk is beyond the scope of what we'll discuss here, but it comes from the semantics of ES6 generator functions.

// While arrays do automatically iterate in for..of loops, regular objects do not have a built-in @@iterator. The reasons for this intentional omission are more complex than we will examine here, but in general it was better to not include some implementation that could prove troublesome for future types of objects.

// It is possible to define your own default @@iterator for any object that you care to iterate over. For example:

var myObject = {
	a: 2,
	b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
	enumerable: false,
	writable: false,
	configurable: true,
	value: function() {
		var o = this;
		var idx = 0;
		var ks = Object.keys( o );
		return {
			next: function() {
				return {
					value: o[ks[idx++]],
					done: (idx > ks.length)
				};
			}
		};
	}
} );

// iterate `myObject` manually
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }

// iterate `myObject` with `for..of`
for (var v of myObject) {
	console.log( v );
}
// 2
// 3

// Note: We used Object.defineProperty(..) to define our custom @@iterator (mostly so we could make it non-enumerable), but using the Symbol as a computed property name (covered earlier in this chapter), we could have declared it directly, like var myObject = { a:2, b:3, [Symbol.iterator]: function(){ /* .. */ } }.

// Each time the for..of loop calls next() on myObject's iterator object, the internal pointer will advance and return back the next value from the object's properties list (see a previous note about iteration ordering on object properties/values).

// The iteration we just demonstrated is a simple value-by-value iteration, but you can of course define arbitrarily complex iterations for your custom data structures, as you see fit. Custom iterators combined with ES6's for..of loop are a powerful new syntactic tool for manipulating user-defined objects.

// For example, a list of Pixel objects (with x and y coordinate values) could decide to order its iteration based on the linear distance from the (0,0) origin, or filter out points that are "too far away", etc. As long as your iterator returns the expected { value: .. } return values from next() calls, and a { done: true } after the iteration is complete, ES6's for..of can iterate over it.

// In fact, you can even generate "infinite" iterators which never "finish" and always return a new value (such as a random number, an incremented value, a unique identifier, etc), though you probably will not use such iterators with an unbounded for..of loop, as it would never end and would hang your program.

var randoms = {
	[Symbol.iterator]: function() {
		return {
			next: function() {
				return { value: Math.random() };
			}
		};
	}
};

var randoms_pool = [];
for (var n of randoms) {
	randoms_pool.push( n );

	// don't proceed unbounded!
	if (randoms_pool.length === 100) break;
}
// This iterator will generate random numbers "forever", so we're careful to only pull out 100 values so our program doesn't hang.

// Review

// Many people mistakenly claim "everything in JavaScript is an object", but this is incorrect. Objects are one of the 6 (or 7, depending on your perspective) primitive types. Objects have sub-types, including function, and also can be behavior-specialized, like [object Array] as the internal label representing the array object sub-type.

// Objects are collections of key/value pairs. The values can be accessed as properties, via .propName or ["propName"] syntax. Whenever a property is accessed, the engine actually invokes the internal default [[Get]] operation (and [[Put]] for setting values), which not only looks for the property directly on the object, but which will traverse the [[Prototype]] chain if not found.

// Properties have certain characteristics that can be controlled through property descriptors, such as writable and configurable. In addition, objects can have their mutability (and that of their properties) controlled to various levels of immutability using Object.preventExtensions(..), Object.seal(..), and Object.freeze(..).

// Properties don't have to contain values -- they can be "accessor properties" as well, with getters/setters. They can also be either enumerable or not, which controls if they show up in for..in loop iterations, for instance.

// You can also iterate over the values in data structures (arrays, objects, etc) using the ES6 for..of syntax, which looks for either a built-in or custom @@iterator object consisting of a next() method to advance through the data values one at a time.