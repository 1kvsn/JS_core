const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	this.classList.add('fas');

	if ( !hasFlippedCard ) {
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this;
	hasFlippedCard = false;

	checkforMatch();
}

function checkforMatch() {
	if (firstCard.dataset.name === secondCard.dataset.name) {
		disableCards();
		return;
	}
	unflipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
	setTimeout(() => {
		firstCard.classList.remove('fas');
		secondCard.classList.remove('fas');
	}, 1500);
}





cards.forEach(card => card.addEventListener('click', flipCard));