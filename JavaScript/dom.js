const newElement = document.createElement("h2");

newElement.textContent ="strick is coming";

newElement.id="second"

// console.log(newElement)

const element = document.getElementById("first");

element.after(newElement)

const newElement2 = document.createElement("h3");

newElement2.textContent="diwali aa rahi hai"

newElement2.id="third "

newElement2.classList.add =("holi")
// newElement2.classList.remove =("holi")

newElement2.style.backgroundColor="pink";
newElement2.style.fontSize="20px";
element.before(newElement2);


// // console.log(newElement2.getAttribute("class"))

// // before and after

// const list = document.createElement("li");
// list.textContent ="milk";

// const list2 = document.createElement("li");
// list2.textContent ="cake";

// const unorderElement = document.getElementById("listing");

// unorderElement.append(list) // its push the elelemnt to last
// unorderElement.prepend(list2) //its help to push ele to first


const arr =["milk","halwa","cake","paneer"];

const unorderElement = document.getElementById("listing");
const fragment =document.createDocumentFragment();

for(let food of arr){
    // console.log(food)
    const list = document.createElement("li");
    list.textContent=food;
    fragment.append(list);
    

}
unorderElement.append(fragment);

const s1 =document.getElementById("first");
s1.remove();
