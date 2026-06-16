const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Ophiuchus",
    "Cetus",
    "Orion",
    "Lyra",
    "Pegasus",
    "Andromeda",
    "Phoenix",
    "Draco"
];

const compliments = [
    "Your energy lights up every room you enter.",
    "You have a naturally calm and reassuring presence.",
    "Your creativity makes ordinary things feel special.",
    "People trust you because you listen with care.",
    "You have a strong sense of style and identity.",
    "Your optimism helps others stay hopeful.",
    "You make complex things feel simple.",
    "Your kindness leaves a lasting impression.",
    "You adapt quickly and handle change well.",
    "Your confidence inspires the people around you.",
    "You have a sharp mind and quick wit.",
    "Your heart is generous and sincere.",
    "You bring balance wherever you go.",
    "Your intuition is stronger than you realize.",
    "You are dependable when others need support.",
    "Your ideas are fresh and original.",
    "You have a magnetic and memorable personality.",
    "You approach life with courage and curiosity.",
    "Your patience is one of your greatest strengths.",
    "You make people feel seen and appreciated.",
     "Your energy lights up every room you enter.",
    "You have a naturally calm and reassuring presence.",
    "Your creativity makes ordinary things feel special.",
    "People trust you because you listen with care.",
    "You have a strong sense of style and identity.",
    "Your optimism helps others stay hopeful.",
    "You make complex things feel simple.",
    "Your kindness leaves a lasting impression.",
    "You adapt quickly and handle change well.",
    "Your confidence inspires the people around you.",
    "Your confidence inspires the people around you.",
    "You have a sharp mind and quick wit.",
    
];

const victimCardCompliments = [
    "Even your bad days still look graceful.",
    "You somehow make struggle look poetic.",
    "Your resilience is quietly impressive.",
    "You carry a lot, but never lose your warmth.",
    "Your sensitivity is a strength, not a weakness.",
    "You keep showing up even when it is hard.",
    "Your softness makes you unforgettable.",
    "You have survived more than most people know.",
    "Your honesty is refreshing and rare.",
    "You deserve tenderness just as much as you give it.",
    "You notice pain in ways others miss.",
    "Your heart stays open even after disappointment.",
    "You can be both wounded and incredibly strong.",
    "Your vulnerability makes you real and relatable.",
    "You keep faith alive in difficult moments.",
    "Your quiet endurance is powerful.",
    "You have a way of turning hurt into wisdom.",
    "Your emotional depth is a gift.",
    "You are stronger than the weight you carry.",
    "You deserve more gentle moments than hard ones."
];

const recommendations = [
    "Take a short walk before making a big decision.",
    "Write down your thoughts before responding.",
    "Declutter one small space to reset your energy.",
    "Spend time with people who calm your mind.",
    "Drink water and slow your pace today.",
    "Say no to one thing that drains you.",
    "Trust the plan that feels steady, not flashy.",
    "Revisit a creative project you paused.",
    "Protect your focus from distractions.",
    "Do something kind for your future self.",
    "Choose rest before exhaustion sets in.",
    "Be direct about what you need.",
    "Start with one tiny task and build momentum.",
    "Step away before reacting emotionally.",
    "Listen to music that helps you feel grounded.",
    "Make room for a conversation you have avoided.",
    "Clear your schedule where possible.",
    "Follow the idea that feels both exciting and practical.",
    "Take a break from overthinking the outcome.",
    "Celebrate progress instead of waiting for perfection.",
    "Take a short walk before making a big decision.",
    "Write down your thoughts before responding.",
    "Declutter one small space to reset your energy.",
    "Spend time with people who calm your mind.",
    "Drink water and slow your pace today.",
    "Say no to one thing that drains you.",
    "Trust the plan that feels steady, not flashy.",
    "Revisit a creative project you paused.",
    "Protect your focus from distractions.",
    "Do something kind for your future self.",
    "Choose rest before exhaustion sets in.",
    
];

const predictions = [
    "A small decision soon will open a better path.",
    "You are entering a phase of clearer boundaries.",
    "An old connection may resurface unexpectedly.",
    "Something you have been hoping for starts moving forward.",
    "Your patience will soon be rewarded.",
    "A practical choice brings more peace than expected.",
    "Someone will notice the effort you have been making.",
    "A delay turns out to be helpful in the long run.",
    "You will feel more confident after one honest conversation.",
    "A fresh opportunity appears where you least expect it.",
    "Your next win comes from staying consistent.",
    "A change in routine will improve your mood.",
    "You are closer to a breakthrough than it seems.",
    "A bold step will bring useful clarity.",
    "An answer arrives after you stop forcing it.",
    "A meaningful connection strengthens soon.",
    "You will soon choose peace over pressure.",
    "A hidden strength becomes obvious to others.",
    "The next few days favor small but steady progress.",
    "What feels uncertain now will make sense later."
];

const form = document.getElementById('astro-form');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const name =document.getElementById('first-name').value
    const surname =document.getElementById('surname').value
    const day =parseInt(document.getElementById('day').value)
    const month =parseInt(document.getElementById('month').value)
    const year =parseInt(document.getElementById('year').value)

    const text =`hi ${name} ${surname} , Your Zodic sign is ${zodiacSigns[month-1]},
     ${compliments[day-1]} , ${victimCardCompliments[year%20]} , ${recommendations[(day*month)%30]}, 
     ${predictions[(name.length*surname.length)%20]}`

    
document.getElementById('results').textContent = text;
form.reset();
})