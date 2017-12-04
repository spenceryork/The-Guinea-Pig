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
}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1.addEventListener("mouseout", mouseOff);
function mouseOff () {
    output.innerHTML = "You left me!!";
}