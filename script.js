const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        menuToggle.textContent = 'x';
    } else {
        menuToggle.textContent = 'Menu ';
    }
});