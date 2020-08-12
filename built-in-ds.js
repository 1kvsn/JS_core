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

// An instance of Map maps keys to values. 
// In a Map, a single key-value mapping is called an entry. 
// Maps record in which order entries were created and honor that order when listing entries, keys, or values.

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

// As we’ll see later, Maps are also iterables over key-value pairs. Therefore, you can use the constructor to create a copy of a Map. That copy is shallow: keys and values are the same; they are not duplicated.

const original = new Map()
  .set(false, 'no')
  .set(true, 'yes');

const copy = new Map(original);

// .has() checks if a Map has an entry with a given key. 
// .delete() removes entries.
// .size contains the number of entries in a Map. 
// .clear() removes all entries of a Map.

// .keys() returns an iterable over the keys of a Map:

const map = new Map()
  .set(false, 'no')
  .set(true, 'yes')
;

for (const key of map.keys()) {
  console.log(key);
}
// Output:
// false
// true

// We can use spreading (...) to convert the iterable returned by .keys() to an Array:


// .values() works like .keys(), but for values instead of keys.

// .entries() returns an iterable over the entries of a Map:

const map = new Map()
  .set(false, 'no')
  .set(true, 'yes')
;

for (const entry of map.entries()) {
  console.log(entry);
}
// Output:
// [false, 'no']
// [true, 'yes']

// Spreading (...) converts the iterable returned by .entries() to an Array.

// Map instances are also iterables over entries. In the following code, we use destructuring to access the keys and values of map:
for (const [key, value] of map) {
  console.log(key, value);
}
// Output:
// false, 'no'
// true, 'yes'

// # Converting between Maps and Objects:

// As long as a Map only uses strings and symbols as keys, you can convert it to an object (via Object.fromEntries()):
const map = new Map([
  ['a', 1],
  ['b', 2],
]);

const obj = Object.fromEntries(map);


// You can also convert an object to a Map with string or symbol keys (via Object.entries()):
const obj = {
  a: 1,
  b: 2,
};
const map = new Map(Object.entries(obj));



// Counting Characters

function countChars(chars) {
  const charCounts = new Map();
  for (let ch of chars) {
    ch = ch.toLowerCase();
    const prevCount = charCounts.get(ch) || 0;
    charCounts.set(ch, prevCount+1);
  }
  return charCounts;
}

// You can .map() and .filter() an Array, but there are no such operations for a Map. The solution is:

// 1. Convert the Map into an Array of [key, value] pairs.
// 2. Map or filter the Array.
// 3. Convert the result back to a Map.

// I’ll use the following Map to demonstrate how that works.

const originalMap = new Map()
.set(1, 'a')
.set(2, 'b')
.set(3, 'c');

// Mapping originalMap:

const mappedMap = new Map( // step 3
  [...originalMap] // step 1
  .map(([k, v]) => [k * 2, '_' + v]) // step 2
);

// Filtering originalMap:

const filteredMap = new Map( // step 3
  [...originalMap] // step 1
  .filter(([k, v]) => k < 3) // step 2
);

// Combining Maps

// There are no methods for combining Maps, which is why we must use a workaround that is similar to the one from the previous section.

// Let’s combine the following two Maps:

const map1 = new Map()
  .set(1, '1a')
  .set(2, '1b')
  .set(3, '1c')
;

const map2 = new Map()
  .set(2, '2b')
  .set(3, '2c')
  .set(4, '2d')
;

// To combine map1 and map2, we turn them into Arrays via spreading (...) and concatenate those Arrays. Afterward, we convert the result back to a Map. All of that is done in line A.

const combinedMap = new Map([...map1, ...map2]); // (A)

// #FAQ: Maps

// #1 When should I use a Map, and when should I use an object?

// If you need a dictionary-like data structure with keys that are neither strings nor symbols, you have no choice: you must use a Map.

// If, however, your keys are either strings or symbols, you must decide whether or not to use an object. A rough general guideline is:

// Is there a fixed set of keys (known at development time)?

// Then use an object obj and access the values via fixed keys:

const value = obj.key;

// Can the set of keys change at runtime?

// Then use a Map map and access the values via keys stored in variables:

const theKey = 123;
map.get(theKey);

// #2 When would I use an object as a key in a Map?
// You normally want Map keys to be compared by value (two keys are considered equal if they have the same content). That excludes objects. However, there is one use case for objects as keys: externally attaching data to objects. But that use case is served better by WeakMaps, where entries don’t prevent keys from being garbage-collected.

// #3 Why do Maps preserve the insertion order of entries?
// In principle, Maps are unordered. The main reason for ordering entries is so that operations that list entries, keys, or values are deterministic. That helps, for example, with testing.

// #4 Why do Maps have a .size, while Arrays have a .length?
// In JavaScript, indexable sequences (such as Arrays and strings) have a .length, while unindexed collections (such as Maps and Sets) have a .size:

// .length is based on indices; it is always the highest index plus one.
// .size counts the number of elements in a collection.


// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// 2. Symbol

// Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false

// —multiple symbols may have the same name.


// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// 3. Set

// Before ES6, JavaScript didn’t have a data structure for sets. Instead, two workarounds were used:

// The keys of an object were used as a set of strings.
// Arrays were used as sets of arbitrary values. The downside is that checking membership (if an Array contains a value) is slower.
// Since ES6, JavaScript has the data structure Set, which can contain arbitrary values and performs membership checks quickly.

// #Creating Sets

// There are three common ways of creating Sets.

// First, you can use the constructor without any parameters to create an empty Set:

const emptySet = new Set();

// Second, you can pass an iterable (e.g., an Array) to the constructor. The iterated values become elements of the new Set:

const set = new Set(['red', 'green', 'blue']);

// Third, the .add() method adds elements to a Set and is chainable:

const set = new Set()
.add('red')
.add('green')
.add('blue');

// #Adding, removing, checking membership

// .add() adds an element to a Set.

const set = new Set();
set.add('red');

// .has() checks if an element is a member of a Set.

set.has('red') // true

// .delete() removes an element from a Set.

set.delete('red') // true // there was a deletion
set.has('red') // false

// #Determining the size of a Set and clearing it

// .size contains the number of elements in a Set.
// .clear() removes all elements of a Set.

// #Iterating over Sets

// Sets are iterable and the for-of loop works as you’d expect:

const set = new Set(['red', 'green', 'blue']);
for (const x of set) {
  console.log(x);
}

// Output:
// 'red'
// 'green'
// 'blue'

// As you can see, Sets preserve insertion order. That is, elements are always iterated over in the order in which they were added.

// Given that Sets are iterable, you can use spreading (...) to convert them to Arrays:

const set = new Set(['red', 'green', 'blue']);
const arr = [...set]; // ['red', 'green', 'blue']

// #Set Operations

// Sets are missing several common operations. Such an operation can usually be implemented by:

// 1. Converting the input Sets to Arrays by spreading into Array literals.
// 2. Performing the operation on Arrays.
// 3. Converting the result to a Set and returning it.

// #Union (a ∪ b)

// Computing the union of two Sets a and b means creating a Set that contains the elements of both a and b.

const a = new Set([1,2,3]);
const b = new Set([4,3,2]);
// Use spreading to concatenate two iterables
const union = new Set([...a, ...b]);


// # Intersection (a ∩ b)

// Computing the intersection of two Sets a and b means creating a Set that contains those elements of a that are also in b.

const a = new Set([1,2,3]);
const b = new Set([4,3,2]);

const intersection = new Set([...a].filter(x => b.has(x)));

// #Difference (a \ b)

// Computing the difference between two Sets a and b means creating a Set that contains those elements of a that are not in b. This operation is also sometimes called minus (−).

const a = new Set([1,2,3]);
const b = new Set([4,3,2]);
const difference = new Set([...a].filter(x => !b.has(x)));

// #Mapping over Sets

// Sets don’t have a method .map(). But we can borrow the one that Arrays have:

const set = new Set([1, 2, 3]);
const mappedSet = new Set([...set].map(x => x * 2)); // Convert mappedSet to an Array to check what’s inside it

// #Filtering Sets

// We can’t directly .filter() Sets, so we need to use the corresponding Array method:

const set = new Set([1, 2, 3, 4, 5]);
const filteredSet = new Set([...set].filter(x => (x % 2) === 0));

// #iterating and looping

const set = new Set(['red', 'green']);
for (const x of set.values()) {
  console.log(x);
}
// Output:
// 'red'
// 'green'

const set = new Set(['red', 'green']);
for (const x of set) {
  console.log(x);
}
// Output:
// 'red'
// 'green'

// #Convert Set into a Map

// .entries() enables you to convert a Set to a Map:

const set = new Set(['a', 'b', 'c']);
const map = new Map(set.entries());

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------