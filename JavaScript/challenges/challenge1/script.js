const bulb= document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const status =document.querySelector("h3");


let flag = 0;


toggleButton.addEventListener("click",() => {


if(flag == 0){
    bulb.style.backgroundColor ="yellow";
    bulb.style.boxShadow = "0px 0px 20px 10px yellow";
    document.body.style.backgroundColor ="black";
    document.querySelector("h1").style.color = "white";
    document.querySelector("p").style.color = "white";
    document.querySelector("h3").style.color = "white";

    status.innerHTML = "Status: ON";
    flag = 1;
}else{
    bulb.style.backgroundColor ="black";
    bulb.style.boxShadow = "none";
    document.body.style.backgroundColor ="white";
    document.querySelector("h1").style.color = "black";
    document.querySelector("p").style.color = "black";

    status.innerHTML = "Status: OFF";
    document.querySelector("h3").style.color = "black";
    flag = 0;
}

});

// toggleButton.addEventListener("click",()=>{
//     console.log("on")
// })


// document.getElementById("bulb").style.backgroundColor = "yellow";