//Factory Method;
//Here we created a new Object manually. The parameter of Object.create is a new Object. We're  manually returning.

function userCreator(name, score) {
	const obj = Object.create(methods);
	obj.name = name;
	obj.score = score;
	return obj;
}

var methods =  {
	sayName: function() {
		return this.name;
	},
	
	increaseScore: function() {
		return this.score + 1;
	}
}

const freeUser1 = userCreator('Mark_free', 0, 3000);
console.log(freeUser1);

//Paid User

function PaidUserCreator(name, score, balance) {
	var obj = userCreator(name, score);
	Object.setPrototypeOf(obj, paidUserMethods);
	obj.balance = balance;
	return obj;
}

var paidUserMethods =  {
	increaseBalance: function() {
		return this.balance++;
	}
}

// console.log(paidUser1);
// console.log(paidUser1.increaseBalance());                                                                  
const paidUser1 = PaidUserCreator('Hannah_paid', 24, 9900);
Object.setPrototypeOf(paidUserMethods, methods); //changed the dunder proto of paidUserMethods with the 'methods'.
console.log(paidUser1);

