const userInfo = document.querySelector(".user-info");
const input = document.querySelector('input');

// Displays Followers
function showFollowers(data) {
	console.log(data);
}


//Displays User info fetched by fetchUser function
function showUser(data){
	const value = input.value;
	var parsed = JSON.parse(data);
	userInfo.innerHTML = `
	<img width="150px" height="120px" autofocus type="search" src='${parsed.avatar_url}'>
	<h3>Username: ${parsed.name}</h3>
	<p>${parsed.bio}</p>
	<p>GitHub URL: <a target=_blank href="${parsed.html_url}">${parsed.login}</a></p>
	<button class="button is-primary followers">
		Followers: ${parsed.followers}
	</button>
	<button class="button is-primary following">
		Following: ${parsed.following}
	</button>
	`
	const followerButton = document.querySelector('.followers');
	const followingButton = document.querySelector('.following');
	followerButton.addEventListener('click', showFollowers);
}

// Fetches Followers for GitHub User
function fetchFollowers(event) {
	event.preventDefault();
	var userVal = event.target.value;
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', () => showFollowers(JSON.parse(xhr.response)));
	xhr.open("GET", `https://api.github.com/users/${userVal}/followers`);
	xhr.send();
}


//Fetches GitHub Users Info from API
function fetchUser(event) {
	if(event.keyCode === 13) {
		var userVal = event.target.value;
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => showUser(xhr.response));
		xhr.open("GET", `https://api.github.com/users/${userVal}`);
		xhr.send();
	}
}

input.addEventListener('keyup', fetchUser);
