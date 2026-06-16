const form = document.querySelector('form');

const ans = {
    q1: "Canberra",
    q2: "Mars",
    q3: "William Shakespeare",   
    q4: "Pacific Ocean",
    q5: "Carbon dioxide",
    q6: "Seven",
    q7: "2",
    q8: "H2O",
    q9: "France",
    q10: "Lion",
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for (let [name, value] of data.entries()) {  
        if (ans[name] === value) {                
            finalScore++;
        }
    }

    document.getElementById('finalScore').textContent = `Your Final Score Is ${finalScore} Out Of 10.`;
});