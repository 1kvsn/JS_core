var tag = document.querySelector("button");
			tag.onclick = function handleClick() {
				var name = prompt("What's your name?");
				tag.textContent = "Hello! " + name;
			}