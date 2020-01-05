

var quesContainer = document.body.querySelector('.question-container');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(100));

var quesBanky = [
  {
    "name": "alt-attribute.md",
    "question": "What is the purpose of the `alt` attribute on images?",
    "answer": "The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.",
    "goodToHear": [
      "Decorative images should have an empty `alt` attribute.",
      "Web crawlers use `alt` tags to understand image content, so they are considered important for Search Engine Optimization (SEO).",
      "Put the `.` at the end of `alt` tag to improve accessibility."
    ],
    "links": [
      "[A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
	},
	{
    "name": "callbacks.md",
    "question": "What is a callback? Can you show an example using one?",
    "answer": "Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.\n\nAs an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.\n\n```js\nfunction onClick() {\n  console.log(\"The user clicked on the page.\")\n}\ndocument.addEventListener(\"click\", onClick)\n```\n\nHowever, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).\n\n```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```",
    "goodToHear": [
     "Functions are first-class objects in JavaScript",
      "Callbacks vs Promises"
    ],
    "links": [
      "[MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfunction onClick() {\n  console.log(\"The user clicked on the page.\")\n}\ndocument.addEventListener(\"click\", onClick)\n```",
      "```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```"
    ]
	},
	{
    "name": "closures.md",
    "question": "What is a closure? Can you give a useful example of one?",
    "answer": "A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:\n\n* Variables declared in its own scope\n* Variables declared in the scope of the parent function\n* Variables declared in the global scope\n\nIn JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.\n\nIn addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code.",
    "goodToHear": [
      "Closures are useful because they let you associate data with a function that operates on that data.",
      "A closure can substitute an object with only a single method.",
      "Closures can be used to emulate private properties and methods."
    ],
    "links": [
      "[MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
      "[What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)",
      "[I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
	},
	{
    "name": "css-box-model.md",
    "question": "Describe the layout of the CSS Box Model and briefly describe each component.",
    "answer": "<!-- Your answer goes here. -->\n\n`Content`: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height`.\n\n`Padding`: The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height`.\n\n`Border`: The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height`.\n\n_Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height`.\n\n![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)",
    "goodToHear": [
      "This is a very common question asked during front-end interviews and while it may seem easy, it is critical you know it well!",
      "Shows a solid understanding of spacing and the DOM"
    ],
    "links": [
      "[W3School's CSS Box Model Page](https://www.w3schools.com/Css/css_boxmodel.asp)",
      "[Mozilla's Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "css-preprocessors.md",
    "question": "What are the advantages of using CSS preprocessors?",
    "answer": "CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.",
    "goodToHear": [
      "They allow us to write more maintainable and scalable CSS",
      "Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)"
    ],
    "links": [
      "[CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
	},
	{
    "name": "css-specificity.md",
    "question": "Can you describe how CSS specificity works?",
    "answer": "Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:\n\n* Inline rules (binary - 1 or 0)\n* Number of id selectors\n* Number of class, pseudo-class and attribute selectors\n* Number of tags and pseudo-element selectors\n\nWhen two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element.",
    "goodToHear": [
      "Specificity matrix: [inline, id, class/pseudo-class/attribute, tag/pseudo-element]",
      "In cases of equal specificity, last rule is applied"
    ],
    "links": [
      "[CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "dom.md",
    "question": "What is the DOM?",
    "answer": "The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.",
    "goodToHear": [
      "The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.",
      "The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.",
      "`document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.",
      "Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node."
    ],
    "links": [
      "[MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)"
    ],
    "tags": [
      "html",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "double-vs-triple-equals.md",
    "question": "What is the difference between the equality operators `==` and `===`?",
    "answer": "Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.",
    "goodToHear": [
      "Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.",
      "Type coercion means the values are converted into the same type.",
      "Mention of falsy values and their comparison."
    ],
    "links": [
      "[MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
	}
]

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

var quesBank = quesBanky.sample();

function showAll(quesBank) {
	var newDiv = document.createElement('div');
	newDiv.classList.add('question');
	newDiv.innerHTML = `
	<h4>${quesBank.question}</h4>
	<p>${quesBank.answer}</p>`

	quesContainer.appendChild(newDiv);
	console.log(quesBank[0]);

	var newDiv = document.createElement('div');
	newDiv.classList.add('question');
	newDiv.innerHTML = `
	<h5>Good to hear</h5>
	<ul>
		<li>${quesBank.goodToHear[0]}</li>
		<li>${quesBank.goodToHear[1]}</li>
		<li>${quesBank.goodToHear[2]}</li>
	</ul>
	`
	quesContainer.appendChild(newDiv);

}
showAll(quesBank);