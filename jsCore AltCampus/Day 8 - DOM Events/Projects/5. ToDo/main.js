//To-do List program
const button = document.querySelector('button');
var ul = document.querySelector("ul");
const todoText = document.querySelector('.todo-text');
const todo = document.querySelector('.display-todo');

// Source of truth where all the data is stored.
const allTodo = [
	{
		name: 'one',
		done: false,
	},
	{
		name: 'two',
		done: false,
	}
]

// Displays the lists
function displayTodo(array) {
	array.forEach((todo) => {
		const span = document.createElement('span');
		span.innerText = todo.name; //== #1
		var li = document.createElement('li');
		li.classList.add('display-todo');
		span.classList.add('span-text');
		const div = document.createElement('div')
		div.appendChild(input);
		div.appendChild(span);
		li.appendChild(div);
		ul.appendChild(li);
	});
}

//Adds the typed text to a list
function addTodo(todoName) {
	ul.innerHTML = ''; //clears the input
	const singleTodo = {
		name: todoName,
		done: false,
	};
	if ( todoName ) {
		allTodo.push(singleTodo);
	}
	input.value = '';
	displayTodo(allTodo); //This shows the text on the screen.
}

// Enter Key Listener
function enter(e) {
	if ( e.keyCode == 13 ) {
		addTodo(input.value)
	}
}

// Listeners active
document.addEventListener('keydown', enter);

//Make an input box.
//create an array of objects where you'd like to store the data. This will be the universal source of truth.
//Add event listener to input box.
//Make a function which will get executed by the event listener when the event occurs. This function will push the entered text to a list.

//==1 this takes the typed text and insert it into span. In todo.name, todo is just an argument. It could be anything. It inserts just the 'name' into the span.
