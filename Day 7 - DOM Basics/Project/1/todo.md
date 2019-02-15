## Todo

1. Use createElement() on the document object to create a new `p` element.

<!-- var foo = document.createElement('p'); //creates <p> element
document.body.appendChild(foo); // Append <p> to <body> -->

document.body.appendChild(document.createElement('p')) //Another method to create and append the tag.

2. Use `textContent` property and set the text inside `p` to 'Hello Javascript!'.

<!-- document.body.lastElementChild.textContent= "Hello JavaScript" -->

document.body.children[3].textContent = "I love JavScript" //another method to write the same..

3. Now use the  `innerHTML` property to add HTML inside `p` add `I love <strong>Javascript</strong>`.

<!-- document.body.lastElementChild.id = "pid" //assign an ID to the <p> tag. No need to assign ID here as it can be acheived directly with Children. -->

document.body.children[3].innerHTML = "I love <strong>JavaScript</strong>"




4. Create a structure like this using js and push it to the document.
```html
<ul>
  <li>Buy groceries</li>
  <li>Feed the cat</li>
  <li>Do laundry</li>
</ul>
```
document.body.appendChild(document.createElement('ul'));
document.body.children[3].appendChild(document.createElement('li'))
document.body.children[3].children[0].textContent = "Buy Groceries"
document.body.children[3].appendChild(document.createElement('li'))
document.body.children[3].children[1].textContent = "Feed the Cat"
document.body.children[3].appendChild(document.createElement('li'))
document.body.children[3].children[2].textContent = "Do laundry"

5. Create a new `li` element and push it in the `ul` using `appendChild`.
6. Using `removeChild()` or `remove()` remove an element from the ul.
