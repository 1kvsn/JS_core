let container_box = document.querySelector('.container-box');



// box event action
function boxAction(e) {
	var setofBoxes = document.querySelectorAll('.box');
	for ( var i = 0; i < setofBoxes.length; i++ ) {
		// var selectedBox = setofBoxes[i].dataset.id;
		// var selectedBox = setofBoxes[i].className;
		// if ( e.target.classList.contains('fa-radiation-alt') ) {
		// }
		setofBoxes[i].setAttribute('data-index', i);
		let id = e.target.dataset.index;
		if (id === '0' ) {
			container_box.children[id].classList.add('fas');
			
		}
	} 
}











//Adds Event listener for each boxes
container_box.addEventListener('click', boxAction);