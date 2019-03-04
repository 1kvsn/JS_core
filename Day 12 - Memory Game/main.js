
let cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let openedCards = [];

// Flipping of cards
function flipCard() {
	if( event.target == firstCard ) return;
	cards.forEach(function(element) {
		if ( element === event.target ) {
			element.classList.add('fas');
			openedCards.push(element);
			firstCard = openedCards[0];
			secondCard = openedCards[1];
			if ( openedCards.length === 2 ) {
				if ( firstCard.dataset.name === secondCard.dataset.name ) {
					//increase counter later
					counter()
					disableCards();
					openedCards = [];
					[firstCard ,secondCard] = [null,null]
							console.log("Yay! it's a match");
				} else {
					setTimeout(() => {
						firstCard.classList.remove('fas');
						secondCard.classList.remove('fas');
						[firstCard, secondCard] = [null, null]
					}, 1000);
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