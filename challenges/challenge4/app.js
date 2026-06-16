const left =document.getElementById("left");
const right = document.getElementById("right");
const hide =document.getElementById("hide");


left.addEventListener("click",()=>{
hide.forEach((element) => {
    for (let i = 0; i < hide.length; i++) {
        hide[i].style.display = "none";
    }
});


});