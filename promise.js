//  https://javascript.info/promise-api

const err = new Error('whoops!') // Error object with error message passed

let promise1 = new Promise((resolve, reject) => {
	// the function is executed automatically when the promise is constructed

	// after 1 second signal that the job is done with the result "done"
	setTimeout(() => resolve('done'), 2000);
})

// .then function runs when the promise is resolved and receives the result. The second argument of .then is a function that runs when the promise is rejected and receives the error.
// promise1.then(
//   result => alert(result), // runs
//   error => alert(error) // doesn't run
// );

// .catch(f) is the same as .then(null, f)
promise1.catch(alert); // shows "Error: Whoops!" after 1 second

// The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

// Be it resolved or rejected, the promise is said to be 'settled'

// .finally() runs when the promise is settled

// finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

// There are several imp differences between .finally() and .then() :

// 1. A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.

// 2. A finally handler passes through results and errors to the next handler.

// For instance, here the result is passed through finally to then:

new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready"))
  .then(result => alert(result)); // <-- .then handles the result

// And here there’s an error in the promise, passed through finally to catch:

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready"))
  .catch(err => alert(err));  // <-- .catch handles the error object

// That’s very convenient, because finally is not meant to process a promise result. So it passes it through.

// NOTE :-
// On settled promises handlers run immediately

// Subscriptions in real life must be done prior to the event.

// Promises are more flexible. We can add handlers any time: if the result is already there, our handlers get it immediately.

// # Exercise

// Create a promise. The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it.

function delay(ms) {
  return new Promise((resolve, reject) => {
		setTimeout(() => resolve('im resolved'), 1000);
	})
}

delay(3000).then(() => alert('runs after 3 seconds'));

// The delay function returns a promise with pending status which gets eventually resolved and settled after 1000ms. When that happens, the .then method gets executed and the alert popup appears.

// There are 5 static methods of Promise class:

// 1. Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.

// NOTE: 

//  In case of an error, other promises are ignored
// If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

// For example, if there are multiple fetch calls, like in the example above, and one fails, the others will still continue to execute, but Promise.all won’t watch them anymore. They will probably settle, but their results will be ignored.

// Promise.all does nothing to cancel them, as there’s no concept of “cancellation” in promises.
// -----------------------------------------

// Promise.all(iterable) allows non-promise “regular” values in iterable

// Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s passed to the resulting array “as is”.

// For instance, here the results are [1, 2, 3]:

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2, // ready values passed onto the result 'as is'
  3 // ready values 
]).then(alert); // 1, 2, 3

//-----------------------------------------

// 2. Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
// =>  state: "fulfilled" or "rejected"
// =>  value (if fulfilled) or reason (if rejected).

// 3. Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
// 4. Promise.resolve(value) – makes a resolved promise with the given value.
// 5. Promise.reject(error) – makes a rejected promise with the given error.


// Promise handlers .then/.catch/.finally are always asynchronous.

// Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers .

let promise = Promise.resolve();

promise.then(() => alert("promise done!"));

alert("code finished"); // this alert shows first

// If you run it, you see code finished first, and then promise done!.

// That’s strange, because the promise is definitely done from the beginning.

// Why did the .then trigger afterwards? What’s going on?

// Microtasks Queue

// when a promise is ready, its .then/catch/finally handlers are put into the queue. They are not executed yet. When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.

// That’s why “code finished” in the example above shows first.

// Promise handlers always go through this internal queue.

// If there’s a chain with multiple .then/catch/finally, then every one of them is executed asynchronously. That is, it first gets queued, and executed when the current code is complete and previously queued handlers are finished.

// What if the order matters for us? How can we make code finished run after promise done?

// Easy, just put it into the queue with .then:

Promise.resolve()
  .then(() => alert("promise done!"))
	.then(() => alert("code finished"));
	
// Now the order is as intended.

// -----------------------------------------------------
