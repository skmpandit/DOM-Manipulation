//  DOM Manipution

//  Traverse the DOM

//  Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement)

// const htm = document.documentElement;
// console.log(htm.parentNode);
// console.log(htm.parentElement);

//  Child Node Traversal 

// let uli = document.querySelector('ul');
// console.log(uli.childNodes);
// console.log(uli.firstChild);
// console.log(uli.lastChild);

// uli.childNodes[1].style.backgroundColor = "blue";
// uli.childNodes[3].style.backgroundColor = "red";
// uli.childNodes[5].style.backgroundColor = "yellow";
// uli.childNodes[7].style.backgroundColor = "green";

// console.log(uli.children);
// console.log(uli.firstElementChild);
// console.log(uli.lastElementChild);

// Sibliing Node Traversal 

let uiTitle = document.querySelector('ul');
const div = document.querySelector("div");

console.log(div.childNodes);

console.log(uiTitle.previousSibling);
console.log(uiTitle.nextSibling);

console.log(uiTitle.previousElementSibling);
console.log(uiTitle.nextElementSibling);