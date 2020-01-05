  // Create the execution flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.value();




// function greaterThan(n) {
//     if(m > n) {
//       return m;
//     };
// }

// function greaterThan(n) {
//   return m => m > n;
// }