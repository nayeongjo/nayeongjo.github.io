const result = document.querySelector("p#loginResult");
const loginArea = document.querySelector(".loginArea");
const loginForm = document.querySelector("form.login_form");
const loginInput = document.querySelector("form.login_form input");

const HIDE_CLASS = "hide";

function onLogin(evt) {
  evt.preventDefault();
  const inputData = loginInput.value;
  localStorage.setItem("userName", inputData);
  loginInput.value = "";
  writeName(inputData);
}

function onLogout() {
  localStorage.removeItem("userName");

  loginForm.classList.remove(HIDE_CLASS);
  result.classList.add(HIDE_CLASS);
  const removeLogout = loginArea.querySelector("i");
  removeLogout.remove();
}

function writeName(name) {
  result.innerText = `nice meet you! ${name}`;
  result.classList.remove(HIDE_CLASS);
  loginForm.classList.add(HIDE_CLASS);

  const logout = document.createElement("i");
  logout.className = "fa-solid fa-right-from-bracket";
  logout.addEventListener("click", onLogout);
  loginArea.appendChild(logout);
}

const saveUser = localStorage.getItem("userName");
if (saveUser === null) {
  loginForm.classList.remove(HIDE_CLASS);
  loginForm.addEventListener("submit", onLogin);
} else {
  writeName(saveUser);
}
