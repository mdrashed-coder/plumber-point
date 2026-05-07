
const navBar = document.querySelector('.nav-toggle');
const menuBar = document.querySelector('.nav-menu');

navBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuBar.classList.toggle('active');

})
