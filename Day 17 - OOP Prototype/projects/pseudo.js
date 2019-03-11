//pseudo-classical method; uses new

//Free User

function UserCreator(name, score) {
	this.name = name;
	this.score = score;
}

UserCreator.prototype.sayName = function() {
	return this.name;
}

UserCreator.prototype.increaseScore = function() {
	return this.score + 1;
}

const person1 = new UserCreator('Matt Damon', 34);
console.log(person1);
console.dir(person1);

console.log(person1.increaseScore());


//Paid User 

function PaidUserCreator(name, score, balance) {
	UserCreator.call(this, name, score);
	this.balance = balance;
}

PaidUserCreator.prototype.increaseBalance = function() {
	return this.balance++;
}
Object.setPrototypeOf(PaidUserCreator.prototype, UserCreator.prototype); //We're setting the prototype of paidUserCreator as UserCreator.

const paidUser = new PaidUserCreator('Matt_paid', 34, 3200);
console.log(paidUser);
console.dir(paidUser);

// console.log(paidUser.increaseBalance());
//==========================================================
