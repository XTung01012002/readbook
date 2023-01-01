
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('down', window.scrollY > 0);
});