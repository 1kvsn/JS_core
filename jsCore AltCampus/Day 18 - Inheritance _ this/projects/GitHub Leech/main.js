const userInfo = document.querySelector(".user-info");
var followerInfo = document.querySelector(".follower-info");
const input = document.querySelector('input');
let userVal = "";
let parsed;


// Displays Followers
function showFollowers(data) {
	//data coming is array of objects
	 var mapped = data.map(element => (
		`
		<img width="150px" height="120px" autofocus alt="user_image" src='${element.avatar_url}'>
		<h3>Login: ${element.login}</h3>
		<p>GitHub URL: <a target=_blank href="${element.html_url}">${element.login}</a></p>
		`
	)).join("");
	document.querySelector(".follower-info").innerHTML = mapped;
}

//Displays Users Following
function showFollowing(data) {
	// console.log(data);
	//data coming is array of objects
	var mappedFollowing = data.map(element => (
		`
		<img width="150px" height="120px" autofocus alt="user_image" src='${element.avatar_url}'>
		<h3>Login: ${element.login}</h3>
		<p>GitHub URL: <a target=_blank href="${element.html_url}">${element.login}</a></p>
		`
	)).join("");
	document.querySelector(".following-info").innerHTML = mappedFollowing;
}


//Displays User info fetched by fetchUser function
function showUser(data){
	// const value = input.value;
	let parsed = JSON.parse(data);
	userInfo.innerHTML = `
	<img width="150px" height="120px" autofocus src='${parsed.avatar_url}'>
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
	followerButton.addEventListener('click', fetchFollowers);
	followingButton.addEventListener('click', fetchFollowing);
}

// Fetches Followers for GitHub User
function fetchFollowers(event) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', () => showFollowers(JSON.parse(xhr.response)));
	xhr.open("GET", `https://api.github.com/users/${userVal}/followers`);
	xhr.send();
}

function fetchFollowing(event) {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', () => showFollowing(JSON.parse(xhr.response)));
	xhr.open("GET", `https://api.github.com/users/${userVal}/following`);
	xhr.send();
}


//Fetches GitHub Users Info from API
function fetchUser(event) {
	if(event.keyCode === 13) {
		userVal = event.target.value;
		// console.log(userVal);
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => showUser(xhr.response));
		xhr.open("GET", `https://api.github.com/users/${userVal}`);
		xhr.send();
	}
}

input.addEventListener('keyup', fetchUser);
