let name = {
	firstname: 'Sasikant',
	lastname: 'Nair',
}

let printFullName = function (hometown, state, pin) {
	return console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state + ", " + pin);
}

// Task: make your own .bind() method and use it to bind the above object and function together.

// pseudo-code 

// .bind method can be used on all functions because it is available in its prototype. Hence we've used 'Function' keyword and assigned a new 'mybind' function to its prototype.

// this new myBind function takes multiple params. Hence we use args keyword.

// the first param is the object which becomes the "this" object of the custom .myBind method.

// then we separate the remaining params by using ...rest keyword

// original bind method returns the binded function, hence our function is also returning a new function

Function.prototype.myBind = function(...args) {
  // "this" points to the function which uses this myBind method
  let obj = this;
  let [input_obj, ...rest] = [...args];
  return function (...args2) {
    //access the first arg which will be the object
    obj.call(args[0], ...rest, ...args2);
    //OR use apply
    obj.apply(args[0], [...rest, ...args2]);
  }
}

let printMyName = printFullName.myBind(name, 'raipur', 'CG');
printMyName('492001');