const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(info){
    info.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings()
}
function paintGreetings(){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username} keep going`
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else {
    paintGreetings()
}