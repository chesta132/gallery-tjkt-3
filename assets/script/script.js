const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('.navbar');

// onclick hamburger

hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
}

// onclick !navbar

document.addEventListener('click', function(e) {
    if(!navBar.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
