//Select the section with an id of container without using querySelector.

var one = document.getElementById('container')


//Select the section with an id of container using querySelector.
var one = document.querySelector('#container')


//Select all of the list items with a class of "second".
var one = document.getElementsByClassName('second')


//Select a list item with a class of third, but only the list item inside of the ol tag.
var one = document.querySelector('ol').children[2]


//Give the section with an id of container the text "Hello!".
// var one = document.getElementById('container').innerText = "Hello!"


//Add the class main to the div with a class of footer.
document.body.children[2].classList.add('main')


//Remove the class main on the div with a class of footer.
document.body.children[2].classList.remove('main')

//Create a new li element.
var li = document.createElement('li')


//Give the li the text "four".
var t = document.createTextNode('four');
li.appendChild(t);

//Append the li to the ul element.
// var li = document.createElement("li");
// li.textcontent = "four"
// hello[0].appendChild(li)


//Loop over all of the list inside the ol tag and give them a background color of "green".
var container = document.getElementById('container')
var myol = container.children[1]
var myold = myol.children
for (i = 0; i < myol.length; i++) {
myol[i].style.backgroundColor = "red";
}

//Remove the div with a class of footer.
document.body.children[2].outerHTML = '';