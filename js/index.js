const loginBtn = document.getElementById('login-btn');
const loginInput = document.getElementById('login-input');
const loginAlert = document.getElementById('login-alert');
const themeChanger = document.getElementById('theme-change');
const illustration = document.getElementById('illustration');

let theme = true;
themeChanger.src = "../assets/svg/lamp-light-on.svg";


loginBtn.addEventListener('click', function () {
    const userName = loginInput.value;
    console.log(userName);
    if (userName === "") {
        loginAlert.textContent = "Por favor insira o seu login!"
    } else {
        localStorage.setItem('userName', userName);
        window.location.href = 'construction.html';
    }
})

themeChanger.addEventListener('click', function () {
    if (theme) {
        document.documentElement.style.setProperty('--semantics-three', '#222222');
        document.documentElement.style.setProperty('--green-background', '#123033');
        document.documentElement.style.setProperty('--letras', '#FFFFFF');
        illustration.src = "../assets/svg/welcome-slideshow/slide2-black.svg"

        theme = false;
        themeChanger.src = "../assets/svg/lamp-light-off.svg"
        console.log(theme)
    } else {
        document.documentElement.style.setProperty('--semantics-three', '#DAEAEB');
        document.documentElement.style.setProperty('--green-background', '#127F87');
        document.documentElement.style.setProperty('--letras', '#000000');
        illustration.src = "../assets/svg/welcome-slideshow/slide2-white.svg"

        theme = true;
        themeChanger.src = "../assets/svg/lamp-light-on.svg"
        console.log(theme)
    }
})