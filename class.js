// Class is how we make templates for our objects in JS. It is not a network. It is a tree.

// When we use 'new' keyword to instantiate a class, the contructor is called.

// When we write as:

class Square extends Particle {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	update() {
		// some function which performs updation
	}

	show() {
		// some function which renders display
	}
}

// the square inherits all the methods from the Particle class.
// Here, the square class is called 'Sub-class' or 'Child' class
// and the Particle class is called 'Parent' or 'Super' class.

// Generally, when we make a sub-class, we write its own constructor inside it.

// If we want to call the constructor of the 'Parent/Super' class  from within the sub-class, we call super() within the contructor of the sub-class.

class Square extends Particle {
	constructor(x,y) {
		super(x,y); // runs the parent's constructor function with the parameters we pass.
	}

	// if we don't declare our own update() and show() methods, the ones inherited from the parent class will be executed.
	// if we declare our own methods with the same name as they're declared in parent class, then the parent class method will be ignored.

	show() {
		// write our own show method which will ignore the parent class show method and run this one instead.
	}

	// if we want to run something additional to the update() method we can do it as:
	update() {
		super.update(); // this runs the update() method in the parent class as it is
		// here we can perform some other function operation
	}
}

// Note: a class can only inherit from one other class directly. But it is a tree of inheritance.

// typeof [[class_name]] // function
// typeof [[instantiated_object_from_class_name]] // object