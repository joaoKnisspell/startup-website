const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
    abrirMenu();
})

function abrirMenu(){
   nav.classList.toggle('active');
}