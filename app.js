const inputText = document.querySelector("#add-book input");
const link = document.querySelector(".button");
const ul = document.querySelector("ul");
const checkBox = document.querySelector("#hide input");
const inputSearch = document.querySelector("#search-books input");

const spanDelete = `<span class="delete">Delete</span>`;

link.addEventListener("click", function (e) {
  const spanName = document.createElement("span");
  spanName.className = "name";
  spanName.textContent = inputText.value;

  const li = document.createElement("li");

  li.appendChild(spanName);
  li.innerHTML += spanDelete;

  ul.appendChild(li);

  storeToLocalStorage(inputText.value);

  inputText.value = "";
  e.preventDefault();
});

ul.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    e.target.parentElement.remove();
    removeFromLocalStorage(e.target.parentElement.children[0].textContent);
  }
});

checkBox.addEventListener("change", function (e) {
  if (checkBox.checked === true) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
});

inputSearch.addEventListener("keyup", function (e) {
  for (let book of ul.children) {
    if (book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function (e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let item of tasks) {
    const spanName = document.createElement("span");
    spanName.className = "name";
    spanName.textContent = item;

    const li = document.createElement("li");

    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);
  }
});

function storeToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  tasks.push(task);

  localStorage.setItem("tasks", tasks);
}

function removeFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      tasks.splice(i, 1);
    }
  }

  if (tasks.length === 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("tasks", tasks);
  }
}

///// JavaScript codes for changing themes
let theme = document.querySelector(".theme");
let selection = document.querySelector("#selection");
let title = document.querySelector(".title");

Array.from(theme.children).forEach((theme) => {
  theme.addEventListener("click", (e) => {
    let color = e.target.dataset.color;
    document.body.className = color;
    selection.textContent = color;
    title.style.color = "black";
    selection.style.color = "black";
  });
});

///// ///// ///// Practicing Codes ///// ///// /////

/* // First way to get elements:

let pageBanner = document.getElementById('page-banner'); // get element by id
let titles = document.getElementsByClassName('title'); // get element by class
let lis = document.getElementsByTagName('li');  // get element by tag

for (let element of lis) { // get elements of list by tag
  console.log(element);
}

// Second way to get elements:

let qSelector1 = document.querySelector("#page-banner"); // get element by id
console.log(qSelector1);

let qSelector2 = document.querySelector(".title"); // get only the first element by class
console.log(qSelector2);

let qSelector3 = document.querySelectorAll(".title"); // get all of the elements by class
console.log(qSelector3);

let qSelector4 = document.querySelectorAll("li"); // get all of the elements by tag
console.log(qSelector4);

for (let element of lis) { // get elements of list by tag
  console.log(qSelector1);
}

let qSelector5 = document.querySelectorAll("#book-list li .name")[2];
console.log(qSelector5);

let qSelector6 = document.querySelectorAll("#search-books");
console.log(qSelector6);

let result;
const list = document.querySelector("ul");
const li = document.querySelector("li");

result = list.children[3].children[0].innerHTML; // get the innerHTML of the fourth child of the list
console.log(result); // "The Ants"

result = list.firstElementChild;
result = list.lastElementChild;
result = list.childElementCount;
result = li.parentElement;
console.log(result);

const heading = document.createElement("h2");

heading.innerHTML = `
<ul>
  <li>The Ants</li>
  <li>The Bees</li>
  <li>The Cats</li>
</ul>
`;

heading.appendChild(document.createTextNode("The Ants"));

console.log(heading);

///// ///// ///// Eventlisteners ///// ///// /////

document.querySelector(".button").addEventListener("click", function(event) {
  console.log("You clicked Me!");
  event.preventDefault();
});

document.querySelector(".button").addEventListener("mousedown", function(event) {
  console.log("Mouse Down!");
  event.preventDefault();
});

document.querySelector(".button").addEventListener("mouseup", function(event) {
  console.log("Mouse Up!");
  event.preventDefault();
});

document.querySelector(".button").addEventListener("mouseenter", function(event) {
  console.log("Mouse In!");
  event.preventDefault();
});

document.querySelector(".button").addEventListener("dblclick", function(event) {
  console.log("You Double clicked Me!!");
  event.preventDefault();
});

document.querySelector(".button").addEventListener("mouseout", function(event) {
  console.log("Mouse Out!");
  event.preventDefault();
});

document.querySelector(".button").addEventListener("mousemove", function(event) {
  console.log("Mouse Moving...!");
  event.preventDefault();
});

document.body.addEventListener("mousemove", function(event) {
  console.log("Mouse Moving Everywhere...!");
  event.preventDefault();
});

const heading = document.querySelectorAll(".title")[1];
console.log(heading);

document.body.addEventListener("mousemove", function(event) {
  heading.innerHTML = `MouseX : ${event.offsetX}, MouseY : ${event.offsetY}`;
  event.preventDefault();
});

const checkbox = document.querySelector("#hide input");
const heading = document.querySelectorAll(".title")[1];
const ul = document.querySelector("ul");

checkbox.addEventListener("click", function(event) {
  if (checkbox.checked) {
    heading.style.display = "none";
    ul.style.display = "none";
  } else {
    heading.style.display = "block";
    ul.style.display = "initial";
  }
}); */
