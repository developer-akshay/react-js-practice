# create raio buttons and show selected radio button upon click of submit button 
- 
    <p>Please rate the service:</p>
    <p>
        <label for="very-poor">
            <input type="radio" name="rate" value="Very poor" id="very-poor"> Very poor
        </label>
        <label for="poor">
            <input type="radio" name="rate" value="Poor" id="poor"> Poor
        </label>
        <label for="ok">
            <input type="radio" name="rate" value="OK" id="ok"> OK
        </label>
        <label for="good">
            <input type="radio" name="rate" value="Good"> Good
        </label>
        <label for="very-good">
            <input type="radio" name="rate" value="Very Good" id="very-good"> Very Good
        </label>
        <label for="excellent">
            <input type="radio" name="rate" value="excellent" id='excellent' /> excellent
        </label>
    </p>
    <p>
        <button id="btnRate">Submit</button>
    </p>
    <p id="output"></p>

- 
const btn = document.getElementById("btnRate");
const output = document.getElementById('output')
console.log(btn)
btn.addEventListener('click', ()=>{
  const selectedRadio = document.getElementsByName('rate');
  selectedRadio.forEach((rate)=>{
    if(rate.checked) {
      output.innerText = `you have selected ${rate.value}`
    }
  })
})

# create multiple heading tag and a button upon clicking of that button alert the no of h2 tag present 

- 
    <h1> akshay</h1>
    <h1>JavaScript getElementsByTagName() Demo</h1>
    <h2>First heading</h2>
    <p>This is the first paragraph.</p>
    <h2>Second heading</h2>
    <p>This is the second paragraph.</p>
    <h2>Third heading</h2>
    <p>This is the third paragraph.</p>

    <button id="btnCount">Count h2</button>

- 

const btn = document.getElementById("btnCount");

btn.addEventListener("click", ()=>{
  const heading = document.getElementsByTagName("h2");
  alert(`no of heading H2 tag ${heading.length}`)
})

# get elements by classname and display the text inside those elements 

- 
    <header>
        <nav>
            <ul id="menu">
                <li class="item">HTML</li>
                <li class="item">CSS</li>
                <li class="item highlight">JavaScript</li>
                <li class="item">TypeScript</li>
            </ul>
        </nav>
        <h1>getElementsByClassName Demo</h1>
    </header>
    <section>
        <article>
            <h2 class="secondary">Example 1</h2>
        </article>
        <article>
            <h2 class="secondary">Example 2</h2>
        </article>
    </section>

- 

    // to fetch the li items from menu and log each item 
    const menu = document.getElementById("menu");
    const items = menu.getElementsByClassName("item");
    console.log('items',items)

    const data = Array.of(...items).map((item)=>item.textContent)
    console.log('data',data)

    // select the secondary  class and display the text of those tags  

    const heading = document.getElementsByClassName("secondary");
    const headingData = Array.of(...heading).map(item=>item.textContent);
    console.log(headingData)

# basic of query selector with pseduop classes , querySelector, querySelectoraLL

- 

    // To find descendants of a node, you use the space ( ) descendant combinator syntax:
    // For example p a will match all <a> elements inside the p element:

    const link = document.querySelectorAll('p a')
    console.log(link)

    // The > child combinator finds all elements that are direct children of the first element
    // The following example finds all li elements that are directly inside a <ul> element:

    let listItems = document.querySelectorAll('ul > li');

    // To select all li elements that are directly inside a <ul> element with the class nav:

    let listItems = document.querySelectorAll('ul.nav > li');

    // The ~ combinator selects siblings that share the same parent:
    // For example, p ~ a will match all <a> elements that follow the p element, immediately or not:

    let links = document.querySelectorAll('p ~ a');

    // The + adjacent sibling combinator selects adjacent siblings:
    // For example, h1 + a matches all elements that directly follow an h1:

    let links = document.querySelectorAll('h1 + a');

    // Pseudo-classes
    // For example, the li:nth-child(2) selects the second <li> element in a list:

    let listItem = document.querySelectorAll('li:nth-child(2)');

# how to find parentNode
- 
<div id="main">
        <p class="note">This is a note!</p>
    </div>

- 
const p = document.querySelector(".note");
const pparentNode = p.parentNode
console.log(pparentNode) 

# ABOUT NEXT AND PREVIOUS SIBLING , FIRST CHILD, LASTCHILD , ALL CHILD NODES
- 

<ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
</ul>

- 

const current = document.querySelector('.current');
const nSibling = current.nextElementSibling

let current = document.querySelector('.current');
let prevSibling = currentNode.previousElementSibling;

let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

let menu = document.getElementById('menu');
console.log(main.lastElementChild);

let menu = document.getElementById('menu');
let children = menu.children;
console.log(children);


# create element and textnode then add it to the body 

- 
const div = document.createElement('div');
div.id = "content";
div.className = "note";

let text = document.createTextNode('create element example');
let h2 = document.createElement('h2');
h2.textContent = "h2 tag added "

div.appendChild(h2)
div.appendChild(text);


document.body.appendChild(div)

# adding li with the help of a function and by normal way too 

- 
<ul id="menu">
    <li>Home</li>
</ul>

- 

const ulElement = document.getElementById("menu");

const li = document.createElement("li");
li.textContent = "work"

ulElement.appendChild(li)

// second way 

const ul = document.getElementById("menu");

function CreateLiElement(text) {
  let li = document.createElement('li');
  li.textContent = text;
  return li
}

ul.appendChild(CreateLiElement('home'));
ul.appendChild(CreateLiElement('work'));
ul.appendChild(CreateLiElement('guest house'));

# Use appendChild() method to add a node to the end of the list of child nodes of a specified parent node.
# The appendChild() can be used to move an existing child node to a new position within the document.

- 
<ul id="first-list">
    <li>Everest</li>
    <li>Fuji</li>
    <li>Kilimanjaro</li>
</ul>

<ul id="second-list">
    <li>Karakoram Range</li>
    <li>Denali</li>
    <li>Mont Blanc</li>
</ul>

- 
const firstList = document.querySelector('#first-list');
// take the first child element
const everest = firstList.firstElementChild;
// get the second list
const secondList = document.querySelector('#second-list');
// append the everest to the second list
secondList.appendChild(everest)

- When you set textContent on a node, all the node’s children will be removed and replaced by a single text node with the newText value. For example:

- Use the textContent property to return the concatenation of the textContent of every child node. You can use it to set a text for a node.
The innerText returns the human-readable text that takes CSS into account.

# DocumentFragment & createDocumentFragment

- To create a new document fragment, you use the DocumentFragment constructor like this:
let fragment = new DocumentFragment();

- Alternatively, you can use the createDocumentFragment() method of the Document object:
let fragment = document.createDocumentFragment();

- 
<ul id="language"></ul>

- 
let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];
let langEl = document.querySelector('#language')

let fragment = document.createDocumentFragment();

languages.forEach((language) => {
    let li = document.createElement('li');
    li.innerHTML = language;
    fragment.appendChild(li);
})

langEl.appendChild(fragment);


# insertAdjacentHTML

- 
     <ul id="list">
         <li>CSS</li>
     </ul>

- 
let list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
list.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
list.insertAdjacentHTML('beforeend', '<li>JavaScript</li>');
list.insertAdjacentHTML('afterend', '<p>For frontend developers</p>');






