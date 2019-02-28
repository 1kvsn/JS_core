var input = document.body.querySelector('input');
var ul = document.querySelector('.list-container');
// var para = document.querySelectorAll('p');
var allBooks = JSON.parse(localStorage.getItem('myBooks')) || [];

// allBooks = [
//   {
//     "title": "One",
//     "id": 0
//   },
//   {
//     "title": "Two",
//     "id": 1
//   }
// ];

let id = Number(localStorage.getItem('booksId')) || 0;
// let id = 0

// Input event action
function addBook(e) {
	allBooks.push( {title: input.value, id: id++ })
	localStorage.setItem('booksId', id)
	displayBook(allBooks);
	input.value = '';
	setToLocalStorage(allBooks);
}

function displayBook(displayArray) {
	ul.innerHTML = '';
	displayArray.forEach(element => {
	var textContent = document.createTextNode(element.title);
	var li = document.createElement('li');
	var p = document.createElement('p');
	p.setAttribute('data-id', element.id)
	p.classList.add('remove');
	li.appendChild(textContent);
	p.innerText = "|-x-|";
	li.appendChild(p);
	ul.appendChild(li);
	});
}
displayBook(allBooks);

// Local Storage
function setToLocalStorage(data) {
	localStorage.setItem('myBooks', JSON.stringify(data));
}

// Remove Books
function removeBook(e) {
	// debugger;
	if(e.target.classList.contains('remove')) {
		console.log(e.target.dataset.id);
		allBooks = allBooks.filter(book => book.id !== Number(e.target.dataset.id));
		// console.log(displayArray);
		displayBook(allBooks);
		setToLocalStorage(allBooks);
	}
}

function searchBooks(event) {
 	let searchedArr = allBooks.filter(books => {
	let lowerCased = books.title.toLowerCase();
	return lowerCased.includes(event.target.value.toLowerCase());
 })
 displayBook(searchedArr);
}

// event listeners
document.body.querySelector('input').addEventListener('keyup', (event) => {
	if ( event.keyCode === 13 && input.value) {
		addBook(event);
	}
	else{
		searchBooks(event);
	}
});

ul.addEventListener('click', removeBook);