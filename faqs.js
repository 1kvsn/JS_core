// 1. Write a function which can be called like add(1)(2)(3)... and will return the sum of all the numbers passed.

function add(a) {
    return function(b) {
        if (b) {
            return add(a + b)
        }
        return a;
    }
}

// es6 version
const add = (a) => (b) => b ? add(a + b) : a;

add(2)(3)(4)()


// -----------------------------------------------------------------