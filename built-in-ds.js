// 1. Map

// A map (noun) is a data structure that associates values (the keys) with other values. For example, you might want to map names to ages. It is possible to use objects for this.

let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

// Here, the object’s property names are the people’s names, and the property values are their ages. But we certainly didn’t list anybody named toString in our map. Yet, because plain objects derive from Object.prototype, it looks like the property is there.

// As such, using plain objects as maps is dangerous. There are several possible ways to avoid this problem. First, it is possible to create objects with no prototype. If you pass null to Object.create, the resulting object will not derive from Object.prototype and can safely be used as a map.

console.log("toString" in Object.create(null));
// → false

// Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—such as objects—you cannot use an object as your map.

// Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.


let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

// If you do have a plain object that you need to treat as a map for some reason, it is useful to know that Object.keys returns only an object’s own keys, not those in the prototype. As an alternative to the in operator, you can use the hasOwnProperty method, which ignores the object’s prototype.

console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false

// ---- by impatient programmers

// An instance of Map maps keys to values. A single key-value mapping is called an entry.

// #creating maps

// There are three common ways of creating Maps.

// First, you can use the constructor without any parameters to create an empty Map:

const emptyMap = new Map();

// Second, you can pass an iterable (e.g., an Array) over key-value “pairs” (Arrays with two elements) to the constructor:

const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'], // trailing comma is ignored
]);

// Third, the .set() method adds entries to a Map and is chainable:

const map = new Map()
  .set(1, 'one')
  .set(2, 'two')
  .set(3, 'three');

// #copying maps






// 2. Symbol

// Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false

// —multiple symbols may have the same name.

// 3. Set