// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };

  //Solution

function Vehicle(driver, speed, cargo) {
  this.driver = driver;
  this.speed = speed;
  this.cargo = cargo;
  this.drive = function(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
  this.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
  };

  this.unloadCargo = function() {
    return this.cargo.pop();
  };
}

const car = new Vehicle('Baby Driver', '180', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
const truck = new Vehicle('Tharki Truck Driver', '90', [23, 34, 45, 46, 67, 89]);

console.log(car);
console.log(truck);


// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.

class Person {
  constructor(subject) {
    this.teach = subject;
  }
}

const teacher = new Person('Mathematics');

console.log(teacher);
