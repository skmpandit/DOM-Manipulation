//  DOM Manipulation 

//  Event Listeners


const buttonTow = document.querySelector(".btn-2");

function alertBtn() {
    alert("Hi You are clicked on show 2 button");
}

buttonTow.addEventListener("click", alertBtn);


// mouse Over

const newBackColor = document.querySelector(".btn-3");
const show3 = document.querySelector(".box-3");
const show2 = document.querySelector(".box-2");

function ChangeBgColor() {
    show3.style.backgroundColor = "black";
}

function mouseover() {
    show2.style.backgroundColor = "green";
}

newBackColor.addEventListener("click", ChangeBgColor)

newBackColor.addEventListener("mouseover", mouseover)