// function handleClick(params) {
//    const element =document.getElementById("first");
// element.textContent="strick is coming"
// }

// const element = document.getElementById("first")
// element.onclick= function handleClick(){
//     element.textContent= "strick is coming"
// }

// element.addEventListener('click',()=>{
//      element.textContent= "strick is coming";

// })

// element.addEventListener('dblclick',()=>{
//      element.style.backgroundColor ="pink";
//      element.style.color ='black';
//       element.textContent= "strick is coming";
     
// })

// const child1 =document.getElementById("child1")

// child1.addEventListener('click',()=>{
//     child1.textContent ="I'm clicked"
// })


const parent =document.getElementById("parent")

function handleClick(e){
    e.target.textContent ="I'm Clicked";
parent.removeEventListener("click",handleClick)

}

parent.addEventListener("click",handleClick)

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent= "I'm clicked";
//     })
// }




//Event bubling

const grandParent =document.getElementById("grandParent")
grandParent.addEventListener('click',(e)=>{
    console.log(e.target)
    // console.log("grandParent is Clicked!")
})


// const parent =document.getElementById("parent")
// parent.addEventListener('click',(e)=>{
//     //    console.log(e)
//     // console.log("parent is Clicked!")
// })

// const child =document.getElementById("child")
// child.addEventListener('click',(e)=>{
//     //    console.log(e)
//     //    e.stopPropagation()
//     // console.log("child is Clicked!")
// })

// captue phase
// target phase
// bubling phase

