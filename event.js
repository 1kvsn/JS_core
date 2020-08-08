// e.preventDefault. e.stopPropagation, e.stopImmediatePropagation
// e.preventDefault what property



// Each browser event handler is registered in a context.

// In below code, we call addEventListener on the window object to register a handler for the whole window. Such a method can also be found on DOM elements and some other types of objects. Event listeners are called only when the event happens in the context of the object they are registered on.

window.addEventListener("click", () => {
	console.log("You knocked?");
});



// Event Object

// event handler functions are passed an argument: the event object. This object holds additional information about the event.

// The information stored in an event object differs per type of event. We’ll discuss different types later in the chapter. The object’s type property always holds a string identifying the event (such as "click" or "mousedown").

// Propagation

// The event is said to propagate outward, from the node where it happened to that node’s parent node and on to the root of the document. Finally, after all handlers registered on a specific node have had their turn, handlers registered on the whole window get a chance to respond to the event.

// At any point, an event handler can call the stopPropagation method on the event object to prevent handlers further up from receiving the event. This can be useful when, for example, you have a button inside another clickable element and you don’t want clicks on the button to activate the outer element’s click behavior.

// The following example registers "mousedown" handlers on both a button and the paragraph around it. When clicked with the right mouse button, the handler for the button calls stopPropagation, which will prevent the handler on the paragraph from running. When the button is clicked with another mouse button, both handlers will run.

<p>A paragraph with a <button>button</button>.</p>

let para = document.querySelector("p");
let button = document.querySelector("button");
para.addEventListener("mousedown", () => {
	console.log("Handler for paragraph.");
});
button.addEventListener("mousedown", event => {
	console.log("Handler for button.");
	if (event.button == 2) event.stopPropagation();
});

// Target property

// Most event objects have a target property that refers to the node where they originated. You can use this property to ensure that you’re not accidentally handling something that propagated up from a node you do not want to handle.

// Default Actions

// For most types of events, the JavaScript event handlers are called before the default behavior takes place. If the handler doesn’t want this normal behavior to happen, typically because it has already taken care of handling the event, it can call the preventDefault method on the event object.

// Web Workers

// For cases where you really do want to do some time-consuming thing in the background without freezing the page, browsers provide something called web workers. A worker is a JavaScript process that runs alongside the main script, on its own timeline.

// Imagine that squaring a number is a heavy, long-running computation that we want to perform in a separate thread. We could write a file called code/squareworker.js that responds to messages by computing a square and sending a message back.

addEventListener("message", event => {
  postMessage(event.data * event.data);
});

// To avoid the problems of having multiple threads touching the same data, workers do not share their global scope or any other data with the main script’s environment. Instead, you have to communicate with them by sending messages back and forth.

// This code spawns a worker running that script, sends it a few messages, and outputs the responses.

let squareWorker = new Worker("code/squareworker.js");
squareWorker.addEventListener("message", event => {
  console.log("The worker responded:", event.data);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);

// The postMessage function sends a message, which will cause a "message" event to fire in the receiver. The script that created the worker sends and receives messages through the Worker object, whereas the worker talks to the script that created it by sending and listening directly on its global scope. Only values that can be represented as JSON can be sent as messages—the other side will receive a copy of them, rather than the value itself.