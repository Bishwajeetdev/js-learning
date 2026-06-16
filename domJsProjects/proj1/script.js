const quotes = [
   "The only way to do great work is to love what you do.-Steve Jobs" ,
   "In the middle of every difficulty lies opportunity.-Albert Einstein" ,
  "It does not matter how slowly you go as long as you do not stop.-Confucius" ,
  "Life is what happens when you're busy making other plans.-John Lennon" ,
 "The future belongs to those who believe in the beauty of their dreams.-Eleanor Roosevelt" ,
   "You miss 100% of the shots you don't take.-Wayne Gretzky" ,
   "Whether you think you can or you think you can't, you're right.-Henry Ford" ,
   "I have not failed. I've just found 10,000 ways that won't work.-Thomas Edison" ,
 "The best time to plant a tree was 20 years ago. The second best time is now.-Chinese Proverb" ,
  "An unexamined life is not worth living.-Socrates" ,
  // ...and 10 more inside the widget
];

const button = document.querySelector("button");
const quote =document.querySelector("h1");

button.addEventListener('click',()=>{
const index =Math.floor(Math.random()*10);

quote.textContent=quotes[index];
})