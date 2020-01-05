var ul = document.querySelector('ul');
var input = document.querySelector('input');
let lastChecked;

function addList(event) {
	var li = document.createElement('li');
	li.classList.add('item');
	li.innerHTML = `
	<input type='checkbox'>
	<p>${input.value}</p>
	`
	ul.appendChild(li);
	input.value = '';
}

function shiftAction(e) {
	var checkBoxes = document.querySelectorAll('.list-container input[type="checkbox"]')
	let inBetween = false;
	if ( e.shiftKey && e.target.checked ) {
		checkBoxes.forEach(checkbox => {
			// console.log(checkbox);
			if ( checkbox === e.target || checkbox === lastChecked ) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = e.target;
}

// event listeners
document.body.querySelector('input').addEventListener('keyup', (event) => {
	if ( event.keyCode === 13 && input.value) {
		addList(event);
	}
});

document.body.querySelector('ul').addEventListener('click', shiftAction);