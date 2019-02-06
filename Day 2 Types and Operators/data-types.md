# Data Types

In JavaScript there are two different kinds of data: primitives, and objects. A data type that is not primitive is considered to be an `object`.

## Primitive Data Types
The values that are immutable in javascript is called primitive data type.

1. Number (all numbers in JavaScript are floating point)
2. String ("Hello World!")
3. Boolean (true / false)
4. null (explicitly assigned)
5. undefined (usually the default (automatically assigned) value)
6. Symbol

```js
typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"
 
typeof "abc"; //"string"
typeof String("abc"); //"string"
typeof new String("abc"); //"object"
typeof (new String("abc")).valueOf(); //"string"
 
typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"
```

* Properties of data types:
  1. Primitive data types are immutable values.
  2. Primitives are compared by value.

## Non-Primitive Data Type
1. Object

* Properties of Object:
  1. Objects are mutable by default
  2. Variables hold references to objects
  3. 


## Dynamic typing

JavaScript is a `loosely typed` or a `dynamic language`. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types.

```js
var user = 42; // user is a Number data type
user = "Random User"; // user is reassigned to a String data type
user = false; // user is reassigned to a Boolean data type
```

## null vs undefined

* `null` is an assigned value. It means nothing.
* `undefined` means a variable has been declared but not assigned any value yet.
* `null` and `undefined` are falsy values.
* `null` !== `undefined` but `null` == `undefined`

```js
function sayHi(message = 'hello'){
  console.log(message);
}
sayHi(); // hello
sayHi(undefined); // hello (the value is not assigned)
sayHi(null); // null is assigned as value
```