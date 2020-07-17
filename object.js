// How to copy/clone an object

// ref: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/

// Shallow Copy means only first-level is copied

1. // Spread operator
2. // Object.assign()
3. // Object.fromEntries(Object.entries(obj))
4. // generic for-loop over the obj will also does shallow copy


// Deep Copy
const cloneObj = JSON.parse(JSON.stringify(obj));
// In JSON.stringify/parse, the order of properties in the cloned object may be different.
// JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties.

// Lodash deepClone work with all types, function and Symbol are copied by reference.