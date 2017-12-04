// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

let output = document.getElementById("output-target");
let secOptions = document.getElementsByClassName("article-section");

for (let i = 0; i < secOptions.length; i++) {
    secOptions[i].addEventListener("click", clickedSection)
}

function clickedSection() {
    output.innerHTML = "You clicked on the " + event.target.innerHTML + " Section";
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

let h1 = document.getElementById("page-title");
h1.addEventListener("mouseover", mouseOver);
function mouseOver() {
    output.innerHTML = "You moved your mouse over the header";
};

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1.addEventListener("mouseout", mouseOff);
function mouseOff () {
    output.innerHTML = "You left me!!";
};

// When you type characters into the input field, the output element should mirror the text in the input field.
let keyInpt = document.getElementById("keypress-input");
keyInpt.addEventListener("keyup", keyP);
function keyP() {
    output.innerHTML = keyInpt.value;
};

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
let addCbtn = document.getElementById("add-color");
let guinea = document.getElementById("guinea-pig");
addCbtn.addEventListener("click", newColor);
function newColor() {
    guinea.classList.toggle("colorBlue");
};

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
let hulkBtn = document.getElementById("make-large");
hulkBtn.addEventListener("click", hulk);
function hulk() {
    guinea.classList.toggle("big");
}

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
let capture = document.getElementById("add-border");
capture.addEventListener("click", captureFunc);
function captureFunc() {
    guinea.classList.toggle("cage");
}

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
let rounded = document.getElementById("add-rounding");
rounded.addEventListener("click", roundMe);
function roundMe() {
    guinea.classList.toggle("round");
}