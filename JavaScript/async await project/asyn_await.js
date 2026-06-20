// async wait
// async function always return a promise

// async function greet() {
//     return "rohit"
// }

// const reponse = greet();

// reponse.then((data)=>(console.log(data)))
const parent = document.getElementById('first');

async function getData() {
  
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  try {
    if(!response.ok){
      throw new Error("data not fetch");
    }
  

  for (let user of data) {
    const element = document.createElement("div");
    element.classList.add("user");

    const image = document.createElement("img");
    image.src = user.avatar_url;

    const userName = document.createElement("h2");
    userName.textContent=user.login;

    const profile = document.createElement('a');
    profile.href= user.html_url;
    profile.textContent= "visit profile"

    element.append(image,userName,profile);
    parent.append(element);
  }
  } catch (error) {
    parent.textContent=error
  }


}

getData();

// console.log("hell0 ji kaise ho hain");
