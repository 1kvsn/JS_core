//Tag Creator

var span_select = document.querySelector('.text-container');
var input = document.querySelector('.input');
var tag_c = document.querySelector('.tag-container');
var button = document.querySelector('.button');

const allTags = [];

// Enter Key Listener
function enter(e) {
	if ( e.keyCode == 13 ) {
		addTag(e)
	}
}

// Adds the text
function addTag(e) {
	console.log(e.target);
	const singleTag = e.target.value; 						//Read #1
	if (singleTag) {
		allTags.push(singleTag);
		e.target.value="";
		console.log(allTags);
		displayTag(allTags);
	}
}

//displays the tags
function displayTag(array) {
	console.log(array)
	span_select.innerHTML=null;   								// Read #11
	array.forEach((element, i) => {								// Read #12
		const span = document.createElement('span');
		span.innerText = element; 									// Read #13
		span.classList.add('span-text'); 						// Read #14
		
		// Inserting delete 
		const cross = document.createElement('span');
		cross.innerHTML = ' |x|';
		cross.classList.add('delete');
		cross.setAttribute('data-index', i);
		span.appendChild(cross);
		span_select.appendChild(span);

	});
}
displayTag(allTags);

//To remove a tag
function removeTag(e) {
	console.log(e.target);
	if ( e.target.classList.contains('delete') ) {
		let id = e.target.dataset.index;
		console.log(id, 'removeTag');
		allTags.splice(id, 1);
		displayTag(allTags);
	}
}

document.addEventListener('keydown', enter);
tag_c.addEventListener('click', removeTag);


// How it works

//Adds the Text Explained
// #1 == The singleTag = e.target.value means that whenever we assign event listener to an element, the whole element becomes the target and if we want to fetch the value of that element, we use target.value.
// #2 == e.target.value="";  After pushing the value to the span, we've to clean the existing value from the input box.
// #3 == 

// #11 == span_select.innerHTML=null;  Before executing the 'forEach' function, we need to clear the parent span.
// #12 == forEach function runs through each element in the array.