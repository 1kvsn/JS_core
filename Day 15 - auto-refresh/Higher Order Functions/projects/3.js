// What’s the result of executing this code and why.
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// The result is:
// undefined from console.log(a)
// returns 2 from console.log(foo())

//explanation

//A global execution context is created in the beginning of any program.
// As soon as a GEC is created, the creation phase begins. 
//During the creation phase, it is noted that there is a function declaration for a function named 'test'.
//This gets stored in the memory of the GEC.
//As there are no other variables or functions to be declared, the creation phase of GEC ends and gets to the end of the program where the function test is called.
// As the function test is called, the program is executed and a function execution context (FEC) for TEST is created inside GEC.
// Again, as a new execution context is created, the first phase would be creation phase.
//It is noted that there is a console.log function called inside the TEST and it has a parameter 'a'.
// As the program has no mention of this parameter so far, this parameter is first created in memory with a value of 'undefined'.
//Now, as there are no other declarations to be made, the console.log is executed.
// A new FEC is created for this console.log.
// A creation phase occurs. Nothing is there to be created or to be declared within console.log FEC.
//The function looks for the value of 'a' in its own memory. It doesn't find anything there. So, it bubbles out to the Execution Context of TEST and checks its memory instead. There it finds the value of 'a' as undefined.
// This is the reason, the console.log logs undefined.
// This FEC is now trashed/deleted.
// console.log(foo());
// When the program reaches the console.log( foo() ); line, a separate FEC is created and the creation phase begins. 

// What is result?
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

// What is the result of the following code? Explain your answer.
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function() {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// What will you see in the console for the following example?
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
