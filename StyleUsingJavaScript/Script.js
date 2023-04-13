

const HeadingTitle = document.querySelector("#titleHeading");
// console.log(HeadingTitle)

HeadingTitle.style.color = 'red';

const liItems = document.querySelectorAll(".list-items");
// console.log(liItems)
for(i=0; i<liItems.length; i++) {
    liItems[i].style.fontSize = `1.5rem`;
}

//  Creating Elements
const title = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements
title.append(li)
// Modifying the text
li.innerText = "War-2";
// modifying Attribute & class
li.setAttribute('id', 'titleHeading');
li.removeAttribute("id");

li.classList.add('list-items')
// li.classList.remove('list-items')

console.log(li.classList.contains('list-items'))

// Remove Elements

li.remove();


const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerHTML);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML)