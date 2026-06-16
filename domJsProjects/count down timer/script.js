
setInterval(() => {
    
    
const result =document.getElementById('result');


const current = Date.now();

const olympicTime = new Date(2028,6,14).getTime();
let timer = olympicTime-current;

const day =Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;


const hours =Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;


const minutes =Math.floor((timer)/(1000*60));
timer%=1000*60;


const second =Math.floor((timer)/(1000));
timer%=1000;


result.textContent=` ${day}:days  ${hours}:hours ${minutes}: minutes  ${second}:second:`
}, 1000);

