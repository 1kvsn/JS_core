// https://exploringjs.com/es6/ch_iteration.html

// An iterable is a data structure that wants to make its elements accessible to the public. It does so by implementing a method whose key is Symbol.iterator. That method is a factory for iterators. That is, it will create iterators.

// An iterator is a pointer for traversing the elements of a data structure.

// These are all iterables —
// -> Arrays and TypedArrays
// -> Strings — iterate over each character or Unicode code-points.
// -> Maps — iterates over its key-value pairs
// -> Sets — iterates over their elements
// -> arguments — An array-like special variable in functions
// -> DOM elements (Work in Progress)