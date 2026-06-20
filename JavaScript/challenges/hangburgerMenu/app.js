const navLinks = document.querySelector('.nav-links');

const burger = document.querySelector('.hangBurgerMenu img');


burger.addEventListener('click', () => {
navLinks.style.display = 'block';
burger.style.display = 'none';
const close = document.createElement('p');
close.textContent = 'X';
close.style.cursor = 'pointer';
navLinks.appendChild(close);


close.addEventListener('click', () => {
    navLinks.style.display = 'none';
    burger.style.display = 'block';

    close.remove();
});

} )