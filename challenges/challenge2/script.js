const h1 =document.getElementById("h1");

const btn = document.querySelectorAll("button");
const reset =document.getElementById("reset");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        h1.style.color = button.id;
    });
});


reset.addEventListener("click", () => {
    h1.style.color = "black";
});