// document.querySelector("#list-container").children[0] = firstli



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

function displayTodo(arr) {

	var ul = document.querySelector("#list-container");
	var li = document.createElement('li');
	var input = document.querySelector("#input");
	

}

// made array for source of truth.
// make a function to which will append new entries to the List.
// make event listener to the input tag
// enter text, upon keypress, append the value to a new List.