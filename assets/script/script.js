// nav mobile start

const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.getElementById("hamburger");
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

// nav mobile end

// scroll anim start

window.addEventListener('scroll', () => {
    let contents = document.querySelectorAll('.anim');
    
    contents.forEach(content => {
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        
        if(contentPosition < screenPosition) {
            content.classList.add('scrolled');
        } else {
            content.classList.remove('scrolled');
        }
    });
});

// scroll anim end

// password start

function validatePassword() {
    const password = document.getElementById("password").value.toLowerCase().trim();
    const pwWrong = document.querySelector('.pw-wrong');
    const correctPassword = "nadine elviana van win";

    if (password === correctPassword) {
        window.location.href = "./hidden-mode/hidden-page.html";
    } 
    else {
        pwWrong.classList.add('active');
        document.getElementById("password").value = "";
    }
}

var state = false;
function toggleHide() {
    if (state) {
        document.getElementById('password').setAttribute("type","password");
        document.getElementById('toggle-hide').className = ('ml-[10px] text-[20px] cursor-pointer fa-solid fa-eye');
        state = false;
    }
    else {
        document.getElementById('password').setAttribute("type","text");
        document.getElementById('toggle-hide').className = ('ml-[0.5rem] text-[20px] cursor-pointer fa-solid fa-eye-slash');
        state = true;
    }
}

function emptyValue() {
    const password = document.getElementById("password").value;
    const pwWrong = document.querySelector('.pw-wrong');
    if (password !== "") {
        pwWrong.classList.remove('active');
    }
}

// password end
