
//User via Class Constructor

class UserCreator {
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}

	sayName() {
		return this.name;
	}

	increaseScore() {
		return this.score + 1;
	}
}

//Instantiate the object

const user1 = new UserCreator('Babe', 20, 4500);
console.log(user1);
console.log(user1.increaseScore());
console.dir(user1);

//Paid User

class PaidUserCreator extends UserCreator{
	constructor(name, score, balance) {
		super(name, score, balance);
		this.balance = balance;
	}

	increaseBalance() {
		this.balance++;
	}
}

const paidUser = new PaidUserCreator('Don', 0, 9800);
console.log(paidUser.increaseBalance());
console.log(paidUser);