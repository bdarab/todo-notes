//HomePage
const homeContainer = document.querySelector(".home-container");
const dashContainer = document.querySelector(".dashboard-container");
const regContainer = document.querySelector(".register-container");
const regForm = document.querySelector(".reg-form");
const loginContainer = document.querySelector(".login-container");
const logForm = document.querySelector(".login-form");
const addTaskContainer = document.querySelector(".task-list-container");
const Alert = document.querySelector(".alert-container");
const HomeRegBtn = document.querySelector("#home-regBtn");
const HomeLoginBtn = document.querySelector("#home-loginBtn");
const regBtn = document.querySelector("#regBtn");
const loginBtn = document.querySelector("#loginBtn");
const dashBtn = document.querySelector("#dashBtn");

//HomePage
HomeRegBtn.addEventListener("click", (e) => {
  e.preventDefault();
  homeContainer.classList.add("hide");
  regContainer.classList.remove("hide");
});

HomeLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  homeContainer.classList.add("hide");
  loginContainer.classList.remove("hide");
});

//Registration
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  regContainer.classList.add("hide");
  dashContainer.classList.remove("hide");
});

//DashBoard
dashBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dashContainer.classList.add("hide");
  addTaskContainer.classList.remove("hide");
});

//Login
logForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginContainer.classList.add("hide");
  dashContainer.classList.remove("hide");
});
