const constructionUser = document.getElementById('construction-user')

const userName = localStorage.getItem('userName')

if (userName) {
    constructionUser.textContent = `Olá, ${userName}!`
    localStorage.clear()
    console.log(localStorage.getItem('userName'))
} else {
    constructionUser.textContent = "Olá, visitante!"
    window.location.href = 'index.html';
}