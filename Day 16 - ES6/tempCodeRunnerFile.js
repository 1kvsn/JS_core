function createToDo(data=[]) {
		const ToDo = Object.create(todoMethod);
		ToDo.state = data;
		return ToDo;
}

var todoMethod = {
	add: function(todoText) {
	this.state.push(todoText);
	},
	delete: function(todoText) {
		this.state.pop();
	}
}

var result = createToDo();
result.add(1, 2, 3);
result.add(4, 5, 6, 7, 8, 9, 0);
result;