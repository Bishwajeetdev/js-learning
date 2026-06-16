const name = document.querySelector("#name");
const text=document.getElementById("text");
const age =document.getElementById("age");
const textarea=document.getElementById("bio");

const output = document.getElementById("output-name");
const outputJobTitle = document.getElementById("output-job-title");
const outputAge = document.getElementById("output-age");
const outputBio = document.getElementById("output-bio");

name.addEventListener("input", () => {

    output.textContent = name.value;
});

text.addEventListener("input", () => {

    outputJobTitle.textContent = text.value;
});
age.addEventListener("input", () => {

    outputAge.textContent = age.value;
});
textarea.addEventListener("input", () => {  
    outputBio.textContent = textarea.value;
});