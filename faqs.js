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

// async vs defer

// https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// 1. <script> without any attributes

// Let’s start by defining what <script> without any attributes does. The HTML file will be parsed until the script file is hit, at that point parsing will stop and a request will be made to fetch the file (if it’s external). The script will then be executed before parsing is resumed.

// 2. <script async>

// async downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.

// 3. <script defer>

// defer downloads the file during HTML parsing and will only execute it after the parser has completed. defer scripts are also guaranteed to execute in the order that they appear in the document.

// When should I use what?
// Typically you want to use async where possible, then defer then no attribute. Here are some general rules to follow:

// - If the script is modular and does not rely on any scripts then use async.
// - If the script relies upon or is relied upon by another script then use defer.
// - If the script is small and is relied upon by an async script then use an inline script with no attributes placed above the async scripts.