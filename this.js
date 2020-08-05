// rules of 'this'

// 1. Default Binding

function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2

// The first thing to note, if you were not already aware, is that variables declared in the global scope, as var a = 2 is, are synonymous with global-object properties of the same name. They're not copies of each other, they are each other. Think of it as two sides of the same coin.

// Secondly, we see that when foo() is called, this.a resolves to our global variable a. Why? Because in this case, the default binding for this applies to the function call, and so points this at the global object.

// How do we know that the default binding rule applies here? We examine the call-site to see how foo() is called. In our snippet, foo() is called with a plain, un-decorated function reference. None of the other rules we will demonstrate will apply here, so the default binding applies instead.

// NOTE: If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.

function foo() {
	"use strict";

	console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`

// 2. Implicit binding
// 3. Explicit binding using call, apply methods. 
// 4. 'new' binding

// When a function is invoked with 'new' in front of it, otherwise known as a constructor call, the following things are done automatically:

// - a brand new object is created (aka, constructed) out of thin air
// - the newly constructed object is [[Prototype]]-linked
// - the newly constructed object is set as the this binding for that function call
// - unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2

// By calling foo(..) with new in front of it, we've constructed a new object and set that new object as the this for the call of foo(..). So new is the final way that a function call's this can be bound. We'll call this new binding.


// Review (TL;DR)

// Determining the this binding for an executing function requires finding the direct call-site of that function. Once examined, four rules can be applied to the call-site, in this order of precedence:

// Called with new? Use the newly constructed object.

var bar = new foo()

// Called with call or apply (or bind)? Use the specified object.

var bar = foo.call( obj2 )

// Called with a context object owning the call? Use that context object. 

var bar = obj1.foo()

// Default: undefined in strict mode, global object otherwise.

var bar = foo()

// Be careful of accidental/unintentional invoking of the default binding rule. In cases where you want to "safely" ignore a this binding, a "DMZ" object like ø = Object.create(null) is a good placeholder value that protects the global object from unintended side-effects.

// Instead of the four standard binding rules, ES6 arrow-functions use lexical scoping for this binding, which means they adopt the this binding (whatever it is) from its enclosing function call. They are essentially a syntactic replacement of self = this in pre-ES6 coding.