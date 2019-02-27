

// function flipCard() {
// 	this.classList.add('fas');

// 	if (!hasFlippedCard) {
// 		hasFlippedCard = true;
// 		firstCard = this;
// 		return;
// 	}
// 	secondCard = this;
// 	hasFlippedCard = false;

// 	checkforMatch();
// }

// function checkforMatch() {
// 	if (firstCard.dataset.name === secondCard.dataset.name) {
// 		disableCards();
// 		return;
// 	}
// 	unflipCards();
// }


// function unflipCards() {
// 	setTimeout(() => {
// 		firstCard.classList.remove('fas');
// 		secondCard.classList.remove('fas');
// 	}, 1000);
// }

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
var openedCards = [];

// Flipping of cards
function flipCard() {
	cards.forEach(function(element) {
		if ( element === event.target ) {
			element.classList.add('fas');
			openedCards.push(element);
			if ( openedCards.length === 2 ) {
				firstCard = openedCards[0];
				secondCard = openedCards[1];
							console.log(firstCard, secondCard);
							console.log(firstCard.dataset.name, secondCard.dataset.name);
				if ( firstCard.dataset.name === secondCard.dataset.name ) {
					//increase counter later
					disableCards();
							console.log("Yay! it's a match");
				} else {
					firstCard.classList.remove('fas');
							console.log(firstCard.classList);
					secondCard.classList.remove('fas');
							console.log(secondCard.classList);
					openedCards = [];
				}
			}
		}
	});
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
}




cards.forEach(card => card.addEventListener('click', flipCard));